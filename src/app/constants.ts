export const keysObject = {
    open: "status",
    close: "status",
    title: "title"
};

export const listName = {
    Jobs: "Jobs",
    ShortListed: "ShortListed",
    Interview: "Interview"
};

export const displayedColumn: { [key: string]: Array<string> } = {
    Jobs: ["select", "company", "title", "datePosted", "status"],
    ShortListed: ["select", "name", "currentCompany", "experience", "ctc"],
    Interview: ["interview", "interviewer", "date", "result"],
};

export const company = "company";
export const id = "id";
