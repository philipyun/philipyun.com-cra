import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Education from './Education';
import ProfessionalExperience from './ProfessionExperience';
import FlexContainer from '../common/FlexContainer';
import resume from '../../resources/resume.json';

const styles = createStyles({
    root: {
        padding: 16,
        flex: 1
    },
    columnTwo: {
        width: "50%",
    }
});

interface IResumeRoutePropTypes extends WithStyles<typeof styles>{

}

const ResumeRoute: React.FunctionComponent<IResumeRoutePropTypes> = (props) => {
    const { classes } = props;
    return (
        <FlexContainer className={classes.root}>
            <FlexContainer column className={classes.columnTwo}>
                <Education resumeEntry={resume.education} />
                <ProfessionalExperience resumeEntries={resume.experience} />
            </FlexContainer>
        </FlexContainer>
    );
};

export default withStyles(styles)(ResumeRoute);
