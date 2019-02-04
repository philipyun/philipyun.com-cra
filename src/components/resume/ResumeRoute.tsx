import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { School, Work } from '@material-ui/icons';
import FlexContainer from '../common/FlexContainer';
import resume from '../../resources/resume.json';
import ExperienceCard from './views/ExperienceCard';

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
    const { education, experience} = resume;
    return (
        <FlexContainer className={classes.root}>
            <FlexContainer column className={classes.columnTwo}>
                <ExperienceCard headerTitle="Education" Icon={School} resumeEntries={education} />
                <ExperienceCard headerTitle="Professional Experience" Icon={Work} resumeEntries={experience} />
            </FlexContainer>
        </FlexContainer>
    );
};

export default withStyles(styles)(ResumeRoute);
