import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';

const styles = createStyles({
    cardContent: {
        marginLeft: 41,
        padding: 8,
        paddingTop: 0,
        paddingBottom: "8px !important",
    }
});

interface IResumeCardContentPropTypes extends WithStyles<typeof styles> {
    children: React.ReactNode
}

const ResumeCardContent: React.FunctionComponent<IResumeCardContentPropTypes> = (props) => {
    const {classes, children} = props;

    return (
        <CardContent className={classes.cardContent}>
            {children}
        </CardContent>
    );
};

export default withStyles(styles)(ResumeCardContent);
