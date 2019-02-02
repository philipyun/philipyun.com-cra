import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {TIconComponent, Github, Instagram, LinkedIn, Twitter} from '../../icons';
import FlexContainer from '../common/FlexContainer';

interface IconMetadata {
    link: string,
    Icon: TIconComponent
}

function generateIcon(link: string, icon: TIconComponent): IconMetadata {
    return {
        link,
        Icon: icon
    };
}

const NavIcons: IconMetadata[] = [
    generateIcon("https://www.linkedin.com/in/philipyun/", LinkedIn),
    generateIcon("https://github.com/philipyun", Github),
    generateIcon("https://www.instagram.com/philip.yun103/", Instagram),
    generateIcon("https://twitter.com/philipyun103", Twitter)
];

export default class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">Philip Yun</Typography>
                    <FlexContainer style={{flex: 1}} justification="flex-end">
                        {
                            NavIcons.map((icon: IconMetadata): React.ReactNode => {
                                return (
                                    <IconButton key={icon.link} href={icon.link} target="_blank">
                                        <icon.Icon style={{color: "white"}}/>
                                    </IconButton>
                                );
                            })
                        }
                    </FlexContainer>
                </Toolbar>
            </AppBar>
        );
    }
}
