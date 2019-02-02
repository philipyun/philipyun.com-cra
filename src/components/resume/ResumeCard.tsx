import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, Link } from '@material-ui/core';

const styles = createStyles({
    root: {
        padding: 8,
        width: "80%"
    },
    cardContainer: {
        padding: 8
    }
});

interface IResumeCardPropTypes extends WithStyles<typeof styles> {
    children: React.ReactNode
}

const ResumeCard: React.FunctionComponent<IResumeCardPropTypes> = (props) => {
    const {classes, children} = props;
    return (
        <div className={classes.root}>
            <Card className={classes.cardContainer}>
                {children}
            </Card>
        </div>
    );
};

export default withStyles(styles)(ResumeCard);
