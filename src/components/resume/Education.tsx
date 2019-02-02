import * as React from 'react';
import { School } from '@material-ui/icons';
import ResumeCard from './ResumeCard';
import ResumeCardHeader from './ResumeCardHeader';
import ResumeCardContent from './ResumeCardContent';
import ResumeCardExperienceEntry from './ResumeCardExperienceEntry';
import { IResumeEntryPropTypes } from './ResumeTypeInterfaces';

const Education: React.FunctionComponent<IResumeEntryPropTypes> = (props) =>  {
    return (
        <ResumeCard>
            <ResumeCardHeader Icon={School} title="Education" />
            <ResumeCardContent>
                <ResumeCardExperienceEntry resumeEntry={props.resumeEntry} />
            </ResumeCardContent>
        </ResumeCard>
    );
};

export default Education;
