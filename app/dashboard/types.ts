export type ViewState = "OVERVIEW" | "REGISTRATIONS" | "MEMBERS" | "SETTINGS";

export type RegistrationLog = {
    _id: string;
    fullName: string;
    studentId: string;
    email: string;
    mobile: string;
    semester?: string;
    gsuite?: string;
    facebook?: string;
    robuDept?: string;
    robuDesignation?: string;
    laptop?: string;
    expectations?: string;
    remarks?: string;
    workshopName: string;
    workshopId: string;
    createdAt: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
};