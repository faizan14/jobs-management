export type Status = "open" | "closed" | "unknown";
export type Result = "selected" | "offered" | "rejected" | "inprogress";

export interface PostedJobs {
    title: string;
    company: string;
    datePosted: string;
    status: Status;
    position: number;
}

export interface ShortListed {
    name: string;
    currentCompany: string;
    experience: string;
    ctc: string;
    id: number;
    appliedCompany: string;
}

export interface Interviews {
    id: number;
    candidateId: number;
    interview: string;
    interviewer: string;
    date: string;
    result: Result;
}
