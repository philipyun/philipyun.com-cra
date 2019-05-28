import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { School, Work, Code } from '@material-ui/icons';
import FlexContainer from '../common/FlexContainer';
import resume from '../../resources/resume.json';
import ExperienceCard from './views/ExperienceCard';
import GeneralCard from './views/GeneralCard';
import './ResumeRoute.css';
import SkillsCard from './views/SkillsCard';
import HobbiesCard from './views/HobbiesCard';

const styles = createStyles({
    root: {
        padding: 8,
        flex: 1,
    },
});

interface IResumeRoutePropTypes extends WithStyles<typeof styles>{

}

const ResumeRoute: React.FunctionComponent<IResumeRoutePropTypes> = (props) => {
    const { classes } = props;
    const { education, experience, projects} = resume;
    return (
        <FlexContainer wrap="wrap" className={classes.root} justification="center">
            <FlexContainer column contentAlignment="stretch" className="resumeColumnOne">
                <GeneralCard />
                <SkillsCard />
                <HobbiesCard />
            </FlexContainer>

            <FlexContainer column className="resumeColumnTwo">
                <ExperienceCard headerTitle="Education" Icon={School} resumeEntries={education} />
                <ExperienceCard headerTitle="Professional Experience" Icon={Work} resumeEntries={experience} />
                <FlexContainer style={{flex: 1}}>
                    <ExperienceCard headerTitle="Projects" Icon={Code} resumeEntries={projects} />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    );
};

export default withStyles(styles)(ResumeRoute);
