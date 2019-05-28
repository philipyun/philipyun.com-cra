import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import FlexContainer from '../common/FlexContainer';

const styles = createStyles({
    footerRoot: {
        backgroundColor: "#eceff1",
        height: 250
    }
});


interface IFooterPropTypes extends WithStyles<typeof styles> {

}

class Footer extends React.PureComponent<IFooterPropTypes> {
    render() {
        const {classes} = this.props;

        return (
            <footer className={classes.footerRoot}>
                <FlexContainer style={{height: "100%"}} justification="center" alignment="center">
                    <FlexContainer column alignment="center">
                        <Typography variant="h6">Quick Links</Typography>
                        <FlexContainer>
                            <FlexContainer column style={{width: 150}}>
                                <Link
                                    href="https://www.instagram.com/philip.yun103/"
                                    target="_blank"
                                    underline="hover"
                                    variant="subtitle1"
                                >
                                    Instagram
                                </Link>

                                <Link
                                    href="https://www.youtube.com/watch?v=2AvcSuOZens&list=PLi5gqqJGCI0wq0rZdL4JTLc4jM6_raU2C"
                                    target="_blank"
                                    underline="hover"
                                    variant="subtitle1"
                                >
                                    Musical Arrangements
                                </Link>
                            </FlexContainer>
                            <FlexContainer column style={{width: 150}} alignment="flex-end">
                                <Link
                                    href="https://www.linkedin.com/in/philipyun/"
                                    target="_blank"
                                    underline="hover"
                                    variant="subtitle1"
                                >
                                    LinkedIn
                                </Link>

                                <Link
                                    href="https://www.github.com/philipyun"
                                    target="_blank"
                                    underline="hover"
                                    variant="subtitle1"
                                >
                                    GitHub
                                </Link>
                            </FlexContainer>
                        </FlexContainer>
                        <FlexContainer column style={{padding: 20}} justification="center" alignment="center">
                            <Typography variant="subtitle2">
                                This site was made with ❤️,&nbsp;
                                <Link href="https://reactjs.org/" target="_blank" underline="hover" variant="inherit">
                                    React.js
                                </Link>,&nbsp;
                                <Link href="https://www.typescriptlang.org/" target="_blank" underline="hover" variant="inherit">
                                    TypeScript
                                </Link>,&nbsp;and&nbsp;
                                <Link href="https://material-ui.com/" target="_blank" underline="hover" variant="inherit">
                                    Material-UI
                                </Link>.
                            </Typography>
                            <Typography variant="subtitle2">
                                This site undergoes constant development; please check back for updates!
                            </Typography>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </footer>
        );
    }
}


export default withStyles(styles)(Footer);
