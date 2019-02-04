import * as React from 'react';
import { Divider, Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import { Person, Cloud, Mail, Phone, Home, Settings } from '@material-ui/icons';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import ResumeCardContent from '../core/base/ResumeCardContent';
import selfPortrait from '../../../resources/selfshot.jpg';
import FlexContainer from '../../common/FlexContainer';


const styles = createStyles({
    selfPortrait: {
        width: "100%",
        paddingTop: "67%",
    },
    spacing: {
        height: 8
    },
    divider: {

    },
    icon: {
        padding: 8
    },
    textContainer: {
        padding: 8
    },
    text: {
        lineHeight: "normal",
        margin: 3
    },
    entry: {
        padding: 8
    },
    cardContent: {
        padding: "0 !important"
    },
    root: {
        flex: 1,
        margin: 12
    }
});

interface IGeneralCardPropTypes extends WithStyles<typeof styles>{

}

class GeneralCard extends React.PureComponent<IGeneralCardPropTypes>  {

    private renderCustomDivider() {
        const {classes} = this.props;
        return (
            <Divider variant="fullWidth" className={classes.divider} />
        );
    }

    private renderEntry(Icon:any, value:any) {
        const {classes} = this.props;

        return (
            <FlexContainer className={classes.entry}>
                <FlexContainer className={classes.icon}>
                    <Icon color="action"/>
                </FlexContainer>
                <FlexContainer column justification="center" className={classes.textContainer}>
                    {value}
                </FlexContainer>
            </FlexContainer>
        );
    }

    private renderPlainTextEntry(Icon: any, value: string[]) {
        const {classes} = this.props;
        const text = value.map((str:string) => {
            return (
                <Typography key={str} variant="caption" className={classes.text}>
                    {str}
                </Typography>
            );
        });
        return this.renderEntry(Icon, text)
    }

    private renderLinkEntry(Icon: any, url: string, display: string) {
        const link = (
            <Link href={url} underline="none" variant="caption" target="_blank">
                {display}
            </Link>
        );
        return this.renderEntry(Icon, link);
    }

    private renderPhones() {
        const phones = (
            <>
                <FlexContainer>
                    <Typography variant="caption">
                        cell:&nbsp;
                    </Typography>
                    <Link href="tel:5623976658" underline="none" variant="caption" target="_blank">
                        (562) 397-6658
                    </Link>
                </FlexContainer>
                <FlexContainer>
                    <Typography variant="caption">
                        alt:&nbsp;
                    </Typography>
                    <Link href="tel:9494647986" underline="none" variant="caption" target="_blank">
                        (949) 464-PYUN
                    </Link>
                </FlexContainer>
            </>
        );
        return this.renderEntry(Phone, phones);
    }

    public render() {
        const {classes} = this.props;
        return (
            <Card className={classes.root}>
                <CardMedia
                    image={selfPortrait}
                    className={classes.selfPortrait}
                />
                <CardContent className={classes.cardContent}>
                    {this.renderPlainTextEntry(Person, ["Philip Yun is a professional Software Engineer and graduate of the University of California, Irvine. He serves as a technical lead with strong expertise in React and React-Native projects."])}
                    {this.renderCustomDivider()}
                    {this.renderLinkEntry(Cloud, "http://philipyun.com", "philipyun.com")}
                    {this.renderCustomDivider()}
                    {this.renderLinkEntry(Mail, "mail-to:philip.yun103@gmail.com", "philip.yun103@gmail.com")}
                    {this.renderCustomDivider()}
                    {this.renderPhones()}
                    {this.renderCustomDivider()}
                    {this.renderPlainTextEntry(Home, ["5930 Bixby Village Dr, Apt 157", "Long Beach, CA 90803"])}
                    {this.renderCustomDivider()}
                    {/*{this.renderPlainTextEntry(Settings, ["Skills"])}*/}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(GeneralCard);
