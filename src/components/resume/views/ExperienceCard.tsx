import * as React from 'react';
import { Divider } from '@material-ui/core';
import ResumeCard from '../core/base/ResumeCard';
import ResumeCardHeader from '../core/base/ResumeCardHeader';
import ResumeCardContent from '../core/base/ResumeCardContent';
import ExperienceCardEntry from '../core/experience/ExperienceCardEntry';
import { IResumeEntry } from '../ResumeTypeInterfaces';
import { TIconComponent } from '../../../icons';

interface IExperienceCardPropTypes {
    Icon: TIconComponent,
    resumeEntries: IResumeEntry[],
    headerTitle: string,
}

const ExperienceCard: React.FunctionComponent<IExperienceCardPropTypes> = (props) =>  {
    let {resumeEntries, Icon, headerTitle} = props;

    return (
        <ResumeCard>
            <ResumeCardHeader Icon={Icon} title={headerTitle} />
            <ResumeCardContent>
                {
                    resumeEntries.map((resumeEntry, index) => {
                        return (
                            <div key={resumeEntry.summary.url}>
                                <ExperienceCardEntry resumeEntry={resumeEntry} />
                                {index !== resumeEntries.length - 1 && <Divider />}
                            </div>
                        );
                    })
                }
            </ResumeCardContent>
        </ResumeCard>
    );
};

export default ExperienceCard;
