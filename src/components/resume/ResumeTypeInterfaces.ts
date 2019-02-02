export type TResumeExperienceDetails = string | string[];

export interface IResumeEntrySummary {
    name: string,
    url: string,
    location?: string,
}

export interface IResumeEntryAchievement {
    title: string,
    date: string,
    details: TResumeExperienceDetails
}

export interface IResumeExperienceEntry {
    summary: IResumeEntrySummary
    achievements: IResumeEntryAchievement[]
}

export interface IResumeEntryPropTypes {
    resumeEntry: IResumeExperienceEntry
}
