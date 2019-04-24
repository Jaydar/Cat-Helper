import React from 'react';
import { List ,ListItem ,ListItemIcon ,ListItemText} from "@material-ui/core";
import { 
    Send as SendIcon ,
    InvertColors as InvertColorsIcon , 
    Code as  CodeIcon, 
    AssignmentReturned as AssignmentReturnedIcon ,
    CropSquare as CropSquareIcon,
    Http as HttpICon,
    AccessTime as AccessTimeIcon,
    TextFormat as TextFormatIcon
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.svg';
import './HomePage.scss';

const App: React.FC = () => {
    return (
        <List>
            <ListItem >
                <ListItemIcon color="inherit"><InvertColorsIcon /></ListItemIcon>
                <ListItemText inset primary="颜色转换" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText inset primary="JSON格式化" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><AssignmentReturnedIcon /></ListItemIcon>
                <ListItemText inset primary="模板下载器" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><CropSquareIcon /></ListItemIcon>
                <ListItemText inset primary="二维码生成器" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><HttpICon /></ListItemIcon>
                <ListItemText inset primary="跨域请求" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><AccessTimeIcon /></ListItemIcon>
                <ListItemText inset primary="时间格式转换" />
            </ListItem>
            <ListItem button>
                <ListItemIcon><TextFormatIcon /></ListItemIcon>
                <ListItemText inset primary="字符串转码" />
            </ListItem>
        </List>
    );
}

export default App;
