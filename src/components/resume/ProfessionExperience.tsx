import * as React from 'react';
import { School } from '@material-ui/icons';
import ResumeCard from './ResumeCard';
import ResumeCardHeader from './ResumeCardHeader';
import ResumeCardContent from './ResumeCardContent';
import ResumeCardExperienceEntry from './ResumeCardExperienceEntry';
import { IResumeExperienceEntry } from './ResumeTypeInterfaces';

interface ProfessionExperiencePropTypes {
    resumeEntries: IResumeExperienceEntry[]
}

const ProfessionalExperience: React.FunctionComponent<ProfessionExperiencePropTypes> = (props) =>  {
    let {resumeEntries} = props;

    return (
        <ResumeCard>
            <ResumeCardHeader Icon={School} title="Professional Experience" />
            <ResumeCardContent>
                {
                    resumeEntries.map((resumeEntry) => {
                        return <ResumeCardExperienceEntry key={resumeEntry.summary.url} resumeEntry={resumeEntry} />;
                    })
                }

            </ResumeCardContent>
        </ResumeCard>
    );
};

export default ProfessionalExperience;
