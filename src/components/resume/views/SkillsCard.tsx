import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Build } from '@material-ui/icons';
import ResumeCard from '../core/base/ResumeCard';
import ResumeCardHeader from '../core/base/ResumeCardHeader';
import ResumeCardContent from '../core/base/ResumeCardContent';

const SkillsCard: React.FunctionComponent = (props) =>  {
    return (
        <ResumeCard>
            <ResumeCardHeader Icon={Build} title="Skills and Qualifications" />
            <ResumeCardContent>
                <Typography variant="subtitle2">Programming Languages:</Typography>
                <Typography variant="caption">JavaScript ES5+, C++ 14, C99, Python 2.7-3+, MATLAB/GNU Octave, C#, Java</Typography>
                <Typography variant="subtitle2">Web Frameworks:</Typography>
                <Typography variant="caption">3 years experience in React.js and React-Native. Node.js, Express.js, NPM, Jest Proficiency. Familiarity with
                    Angular.js, Typescript, Webpack.</Typography>
                <Typography variant="subtitle2">Miscellaneous:</Typography>
                <Typography variant="caption">
                    Qt C++ & QML, Strong familiarity in Git VCS, CMake, and Makefile. Proficient in Bash scripting.
                </Typography>
            </ResumeCardContent>
        </ResumeCard>
    );
};

export default SkillsCard;
