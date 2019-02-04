import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const styles = createStyles({
    cardContainer: {
        padding: 8,
        margin: 12,
    }
});

interface IResumeCardPropTypes extends WithStyles<typeof styles> {
    children: React.ReactNode
}

const ResumeCard: React.FunctionComponent<IResumeCardPropTypes> = (props) => {
    const {classes, children} = props;
    return (
        <Card className={classes.cardContainer}>
            {children}
        </Card>
    );
};

export default withStyles(styles)(ResumeCard);
