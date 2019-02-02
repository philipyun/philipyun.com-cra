import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

import Menu from '@material-ui/icons/Menu';

import { IconMetadata, NavIcons } from './HeaderIcons';

import FlexContainer from '../common/FlexContainer';

const styles = createStyles({
    menuButton: {
        marginLeft: -12,
        marginRight: 12
    },
});

interface IHeaderPropTypes extends WithStyles<typeof styles>{

}

const Header: React.FunctionComponent<IHeaderPropTypes> = (props) => {
    const { classes } = props;
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton className={classes.menuButton}>
                    <Menu />
                </IconButton>
                <Typography variant="h5" color="inherit">Philip Yun</Typography>
                <FlexContainer style={{flex: 1}} justification="flex-end">
                    {
                        NavIcons.map((icon: IconMetadata): React.ReactNode => {
                            return (
                                <IconButton color="inherit" key={icon.link} href={icon.link} target="_blank">
                                    <icon.Icon />
                                </IconButton>
                            );
                        })
                    }
                </FlexContainer>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Header);
