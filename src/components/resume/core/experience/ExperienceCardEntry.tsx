import * as React from 'react';

import { IResumeEntryPropTypes } from '../../ResumeTypeInterfaces';
import ExperienceCardSummary from './ExperienceCardSummary';
import ResumeCardExperienceAchievement from './ExperienceCardAchievement';

const ExperienceCardEntry: React.FunctionComponent<IResumeEntryPropTypes> = (props) => {
    const { resumeEntry } = props;
    const { summary, achievements } = resumeEntry;

    return (
        <div>
            <ExperienceCardSummary summary={summary} />
            {
                achievements.map((achievement) => {
                    return <ResumeCardExperienceAchievement key={achievement.title} achievement={achievement} />;
                })
            }
        </div>
    );
};

export default ExperienceCardEntry;
