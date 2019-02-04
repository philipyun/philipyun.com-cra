export type TResumeExperienceDetails = string | string[];

export interface IResumeEntrySummary {
    name: string,
    url: string,
    location?: string,
}

export interface IResumeEntryAchievement {
    title: string,
    startDate: string,
    endDate?: string,
    details: TResumeExperienceDetails
}

export interface IResumeEntry {
    summary: IResumeEntrySummary
    achievements: IResumeEntryAchievement[]
}

export interface IResumeEntryPropTypes {
    resumeEntry: IResumeEntry
}
