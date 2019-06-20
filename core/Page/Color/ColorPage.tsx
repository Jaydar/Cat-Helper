import React from 'react';
import { TextField,Fab,Container } from "@material-ui/core";
import {FileCopy as FileCopyIcon} from '@material-ui/icons/';
import "./ColorPage.scss"

interface Mode {
    mode:ColorMode,
    topName:string,
    btmName:string,
    reg:RegExp,
}

enum ColorMode{ RGB="RGB",RGBA="RGBA",HEX="HEX",HEXA="HEXA",HEXS="HEXS",UKN="UKN" }
  
export default class ColorPage extends React.Component {
    
    private mode:Mode[] = [
        {
            mode:ColorMode.RGB,
            topName:"RGB",
            btmName:"HEX",
            reg:/^rgb\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]),(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]),(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])\)$/im,
        },
        {
            mode:ColorMode.RGBA,
            topName:"RGBA",
            btmName:"HEXA",
            reg:/^rgba\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]),(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]),(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]),(0(\.\d{1,2})?|1)\)$/im,
        },
        {
            mode:ColorMode.HEXA,
            topName:"HEXA",
            btmName:"RGBA",
            reg:/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/,
        },
        {
            mode:ColorMode.HEX,
            topName:"HEX",
            btmName:"RGB",
            reg:/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/,
        },
        {
            mode:ColorMode.HEXS,
            topName:"HEX",
            btmName:"RGB",
            reg:/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/
        }
    ];

    
    private inputElement  = React.createRef<HTMLInputElement>();
    private topInputElement = React.createRef<HTMLInputElement>();
    private btmInputElement = React.createRef<HTMLInputElement>();


    public state = {
        topInputLabelName:ColorMode.HEX,
        btmInputLabelName:ColorMode.RGB,
        topInputValue:"",
        btmInputValue:""
    }

    public componentDidMount(){

        let input = this.inputElement.current as HTMLInputElement;
        input.focus();
        document.execCommand("paste");
        input.value = "#FFFFFFDB"
        this.setValue(input.value.replace(/\s+/g, ""));
    }

    private setValue(inputValue:string){
        let mode = this.mode.find(mode=>mode.reg.test(inputValue));
        if(!mode) return;

        let btmInputValue = this.getValue(inputValue,mode);
        this.setState({
            topInputValue:inputValue,
            topInputLabelName:mode.topName,
            btmInputValue:btmInputValue,
            btmInputLabelName:mode.btmName
        },()=>{
            let input = this.btmInputElement.current as HTMLInputElement;
            input.focus();
            input.select()
            console.log(input.value);
            document.execCommand("copy");
        });

       
    }
    
    private getValue(inptutValue:string,mode:Mode){
        let [,r,g,b,a] = mode.reg.exec(inptutValue)
        switch (mode.mode) {
            case ColorMode.RGB:
                return this.RGBtoHEX([r,g,b]);
            case ColorMode.RGBA:
                return this.RGBtoHEX([r,g,b],a);
            case ColorMode.HEX:
                return this.HEXtoRGB([r,g,b]);
            case ColorMode.HEXA:
                return this.HEXtoRGB([r,g,b],a);
            case ColorMode.HEXS:
                return "";
            default:
                return ""
        }
    }

    private RGBtoHEX(rgb:string[],alpha:string = ""):string{
        let color = rgb.map((item)=>{
            return parseInt(item).toString(16).toUpperCase();
        })
        alpha && color.push(Math.round( (parseFloat(alpha)*255)).toString(16).toUpperCase() )
        return "#"+color.join("")
    }

    private HEXtoRGB(rgb:string[],alpha:string = ""):string{
        let color = rgb.map((item)=>{
            return parseInt(item,16).toString()
        });
        alpha && color.push(( parseInt(alpha,16)/255).toFixed(2) );
        return alpha ? `rgba(${color.join(",")})` : `rgb(${color.join(",")})`;
    }
    

    public render() {
        return <Container style={{padding:12,textAlign:"center"}} maxWidth={false} >

            <input style={{display:"none"}} ref={this.inputElement} />
            <TextField
                label={this.state.topInputLabelName}
                value={this.state.topInputValue}
                inputRef={this.topInputElement}
                margin="dense"
                variant="outlined"
                className="text-field"
                fullWidth={true}
                InputLabelProps={{
                    classes: {
                        focused: "focused",
                    },
                }}
                InputProps={{
                    classes: {
                        root:"root",
                        notchedOutline:"notchedOutline",
                        focused: "focused",
                        input:"input"
                    },
                }}
            />

            <TextField
                style={{marginTop:"1em"}}
                className="text-field"
                autoFocus={true}
                label={this.state.btmInputLabelName}
                value={this.state.btmInputValue}
                inputRef={this.btmInputElement}
                margin="dense"
                variant="outlined"
                fullWidth={true}
                InputLabelProps={{
                    classes: {
                        focused: "focused",
                    },
                }}
                InputProps={{
                    classes: {
                        root:"root",
                        notchedOutline:"notchedOutline",
                        focused: "focused",
                        input:"input"
                    },
                }}
            />
            <Fab
                style={{marginTop:"1em"}}
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="Add"
                className="fad-button"
                classes={{root:"root",label:"label"}}
            >
                <FileCopyIcon fontSize="small" style={{marginRight:"5px"}}/>点击复制
            </Fab>
        </Container>
    }
}