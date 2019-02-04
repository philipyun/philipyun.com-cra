import * as React from 'react';
import { Link } from '@material-ui/core';
import { IResumeEntrySummary } from '../../ResumeTypeInterfaces';

interface IResumeCardExperienceSummaryPropTypes {
    summary: IResumeEntrySummary
}

const ExperienceCardSummary: React.FunctionComponent<IResumeCardExperienceSummaryPropTypes> = (props) => {
    const { summary } = props;

    return (
        <Link href={summary.url} underline="none" variant="subtitle1" target="_blank">
            {summary.name}
        </Link>
    );
};

export default ExperienceCardSummary;
