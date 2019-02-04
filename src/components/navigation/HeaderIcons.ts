import { Github, Instagram, LinkedIn, TIconComponent, Twitter } from '../../icons';

export interface IconMetadata {
    link: string,
    Icon: TIconComponent
}

function generateIcon(link: string, icon: TIconComponent): IconMetadata {
    return {
        link,
        Icon: icon
    };
}

export const NavIcons: IconMetadata[] = [
    generateIcon("https://www.linkedin.com/in/philipyun/", LinkedIn),
    generateIcon("https://github.com/philipyun", Github),
    generateIcon("https://www.instagram.com/philip.yun103/", Instagram),
    // generateIcon("https://twitter.com/philipyun103", Twitter)
];
