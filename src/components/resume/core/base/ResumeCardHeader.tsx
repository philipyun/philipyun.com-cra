import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography'
import { TIconComponent } from '../../../../icons';

const styles = createStyles({
    cardHeader: {
        padding: 8,
        paddingBottom: 0
    },
});

interface IResumeCardHeaderPropTypes extends WithStyles<typeof styles> {
    Icon: TIconComponent,
    title: string | React.ReactNode,
    variant?: TypographyProps['variant'],
    disableTypography?: boolean
}

const ResumeCardHeader: React.FunctionComponent<IResumeCardHeaderPropTypes> = (props) => {
    const {classes, title, Icon, variant, disableTypography} = props;

    return (
        <CardHeader
            disableTypography={disableTypography}
            className={classes.cardHeader}
            avatar={<Icon color="action" />}
            title={title}
            titleTypographyProps={{variant: variant || "h6" }}
        />
    );
};

export default withStyles(styles)(ResumeCardHeader);
