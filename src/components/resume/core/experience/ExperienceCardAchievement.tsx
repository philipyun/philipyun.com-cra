import * as React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { IResumeEntryAchievement, TResumeExperienceDetails } from '../../ResumeTypeInterfaces';
import FlexContainer from '../../../common/FlexContainer';

const styles = createStyles({
    list: {
        margin: 0,
        marginBottom: 12
    },
    listItem: {
        lineHeight: "normal"
    },
    achievementTitle: {
        color: "rgba(0,0,0,.54)",
        fontSize: 14
    },
});

interface IExperienceCardAchievementPropTypes extends WithStyles<typeof styles> {
    achievement: IResumeEntryAchievement,
}

class ExperienceCardAchievement extends React.PureComponent<IExperienceCardAchievementPropTypes> {
    private renderDetail(detail: string) {
        const {classes} = this.props;
        return (
            <li key={detail}>
                <Typography variant="caption" className={classes.listItem}>{detail}</Typography>
            </li>
        );
    }

    private renderDetails() {
        const {classes, achievement} = this.props;
        const {details} = achievement;

        if (typeof details === "string") {
            return <Typography variant="caption" key={details}>{details}</Typography>;
        }

        return (
            <ul className={classes.list}>
                {details.map((detail) => this.renderDetail(detail))}
            </ul>
        )
    }

    private renderTitle() {
        const {classes, achievement} = this.props;
        const {title, startDate, endDate} = achievement;

        let date: string | undefined = startDate;
        if (!!endDate) {
            date += " - " + endDate;
        }

        return (
            <FlexContainer justification="space-between">
                <Typography variant="subtitle1" className={classes.achievementTitle}>{title}</Typography>
                {!!date && <Typography variant="subtitle1" className={classes.achievementTitle}>{date}</Typography>}
            </FlexContainer>
        );
    }

    public render() {
        return (
            <div>
                {this.renderTitle()}
                {this.renderDetails()}
            </div>
        );
    }
}

export default withStyles(styles)(ExperienceCardAchievement);
