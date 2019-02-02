import * as React from 'react';
import { Link, Typography } from '@material-ui/core';

import { IResumeEntryPropTypes, TResumeExperienceDetails } from './ResumeTypeInterfaces';
import FlexContainer from '../common/FlexContainer';

interface IResumeExperienceDetailsPropTypes {
    details: TResumeExperienceDetails,
}

const ResumeCardExperienceDetails: React.FunctionComponent<IResumeExperienceDetailsPropTypes> = (props) => {
    const {details} = props;

    if (typeof details === "string") {
        return <Typography variant="caption" key={details}>{details}</Typography>;
    }

    return (
        <ul style={{margin: 0, marginBottom: 12}}>
            {
                details.map((detail) =>  {
                    return (
                        <li>
                            <Typography variant="caption" key={detail} style={{lineHeight: "normal"}}>{detail}</Typography>
                        </li>
                    )
                })
            }
        </ul>
    );
};


const ResumeCardExperienceEntry: React.FunctionComponent<IResumeEntryPropTypes> = (props) => {
    const { resumeEntry } = props;
    const { summary, achievements } = resumeEntry;

    return (
        <>
            <Link href={summary.url} underline="none" variant="subtitle1" target="_blank">
                {summary.name}
            </Link>
            {
                achievements.map((achievement) => {
                    return (
                        <div key={achievement.title}>
                            <FlexContainer justification="space-between">
                                <Typography variant="body2" style={{color: "rgba(0,0,0,.54)"}}>{achievement.title}</Typography>
                                <Typography variant="body2" style={{color: "rgba(0,0,0,.54)"}}>{achievement.date}</Typography>
                            </FlexContainer>
                            <ResumeCardExperienceDetails details={achievement.details} />
                        </div>
                    );
                })
            }
        </>
    );
};

export default ResumeCardExperienceEntry;
