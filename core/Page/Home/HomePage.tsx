import React from 'react';
import { List ,ListItem ,ListItemIcon ,ListItemText} from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom"
import { 
    InvertColors as InvertColorsIcon , 
    Code as  CodeIcon, 
    AssignmentReturned as AssignmentReturnedIcon ,
    CropSquare as CropSquareIcon,
    Http as HttpICon,
    AccessTime as AccessTimeIcon,
    TextFormat as TextFormatIcon
} from '@material-ui/icons';

import './HomePage.scss';

interface PageProps extends RouteComponentProps{

}


export default class HomePage extends React.Component<PageProps>{
    event_select(page:string){
        
        console.log(this.props.history.push("ColorPage"));
    }
    render(){
        return (
            <List className="list" disablePadding={true}>
                <ListItem button onClick={this.event_select.bind(this,"Color")}>
                    <ListItemIcon color="inherit"><InvertColorsIcon /></ListItemIcon>
                    <ListItemText inset primary="颜色转换" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon><CodeIcon /></ListItemIcon>
                    <ListItemText inset primary="JSON格式化" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon><AssignmentReturnedIcon /></ListItemIcon>
                    <ListItemText inset primary="模板下载器" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon><CropSquareIcon /></ListItemIcon>
                    <ListItemText inset primary="二维码生成器" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon><HttpICon /></ListItemIcon>
                    <ListItemText inset primary="跨域请求" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon><AccessTimeIcon /></ListItemIcon>
                    <ListItemText inset primary="时间格式转换" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon><TextFormatIcon /></ListItemIcon>
                    <ListItemText inset primary="字符串转码" />
                </ListItem>
            </List>
        )
    }
}
