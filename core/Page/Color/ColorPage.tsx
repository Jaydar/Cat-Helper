import React from 'react';
import { TextField, InputLabel } from "@material-ui/core";
import "./ColorPage.scss"



enum ColorMode{ RGB="RGB",RGBA="RGBA",HEX="HEX",HEXA="HEXA",UKN="UKN" }

export default class HomePage extends React.Component {
    
    state = {
        topInputLabelName:ColorMode.HEX,
        bottomInputLabelName:ColorMode.RGB
    }
    
    inputElement  = React.createRef();

    componentDidMount(){
        console.log(ColorMode);
        let input = (this.inputElement.current as HTMLInputElement);
        input.focus()
        document.execCommand("paste");
        let inputValue = input.value.trim();

    }

    getMode(str:string){
        str[str.length-1] == "," && (str =  str.substring(0, str.length - 1))
        str[0] == "#" && (str =  str.substring(1, str.length));
        let pattern = new RegExp("[, ]");
        if(str.includes(",") || str.includes(" ")){
            switch (str.split(str.includes(",") ? ",":" ").length) {
                case 3:
                    return ColorMode.RGB
                case 4:
                    return ColorMode.RGBA
                default:
                    return ColorMode.UKN
            }
        }
        else{
            switch (str.length) {
                case 6:
                    return ColorMode.HEX
                case 8:
                    return ColorMode.HEXA
                default:
                    return ColorMode.UKN
            }
        }
    }


    render() {
        return <div className="page" >

            <TextField
                inputRef={this.inputElement}
                autoFocus={true}
                margin="dense"
                label={this.state.topInputLabelName}
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
                    },
                }}
            />

            <TextField
                className="text-field"
                label={this.state.bottomInputLabelName}
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
                    },
                }}
            />
        </div>
    }
}