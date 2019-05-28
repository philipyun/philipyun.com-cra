import * as React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { Favorite, MusicNote, FitnessCenter, LocalPlay, VideogameAsset, Code } from '@material-ui/icons';
import ResumeCard from '../core/base/ResumeCard';
import ResumeCardHeader from '../core/base/ResumeCardHeader';
import ResumeCardContent from '../core/base/ResumeCardContent';
import FlexContainer from '../../common/FlexContainer';

const HobbiesCard: React.FunctionComponent = (props) =>  {
    return (
        <FlexContainer style={{flex: 1}}>
            <ResumeCard>
                <ResumeCardHeader Icon={Favorite} title="Hobbies and Interests" />

                <ResumeCardHeader Icon={MusicNote} title="Music" variant="subtitle1" />
                <ResumeCardContent>
                    <Typography variant="caption">
                        Guitar Player for 10+ years. Avid collector of guitar pedals (owns 15+), 6
                        Year member of the UC Irvine Anteater Pep Band, performing as Bass, Guitar and Percussion.
                        Music Arranger, arranges pep band versions of modern popular charts. Favorite Artists include
                        Muse, John Mayer and Kings of Leon
                    </Typography>
                </ResumeCardContent>

                <Divider />

                <ResumeCardHeader Icon={FitnessCenter} title="Sports" variant="subtitle1" />
                <ResumeCardContent>
                    <Typography variant="caption">
                        Extreme basketball (NCAA and NBA) fanatic.
                        Follows UC Irvine's Men's Basketball and the Golden State Warriors.
                        Enjoys heavy statistical analysis in sports, such as box score and playoff picture analysis.
                    </Typography>
                </ResumeCardContent>

                <Divider />

                <ResumeCardHeader Icon={LocalPlay} title="Entertainment" variant="subtitle1" />
                <ResumeCardContent>
                    <Typography variant="caption">
                        Television enthusiast. Has watched The Office more than 10 times through. Comic book movie and tv show
                        fanatic: loves Marvel's Cinematic Universe, CW DC Shows (as bad as they are) and Breaking Bad.
                        Favorite movie of all time is Christopher Nolan's Interstellar
                    </Typography>
                </ResumeCardContent>

                <Divider />

                <ResumeCardHeader Icon={VideogameAsset} title="Gaming" variant="subtitle1" />
                <ResumeCardContent>
                    <Typography variant="caption">
                        Casual video-gamer.  Life long fan of the Pokemon adventure games. Enjoys playing the NBA 2k series,
                        and Nintendo's Legend of Zelda: Breath of the Wild
                    </Typography>
                </ResumeCardContent>

                <Divider />

                <ResumeCardHeader Icon={Code} title="Programming" variant="subtitle1" />
                <ResumeCardContent>
                    <Typography variant="caption">
                        Ocassionally write various applications for fun, or for personal use. Loves to learn new technologies
                        in the web industry.
                    </Typography>
                </ResumeCardContent>
            </ResumeCard>
        </FlexContainer>
    );
};

export default HobbiesCard;
