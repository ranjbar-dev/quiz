export interface UserModel {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    father_name: string;
    national_code: string;
    gender: number;
    birth_date: string;
    birth_place: string;
    department: string;
    position: string;
    work_phone: string;
    education_level: string;
    jobs: number[];
}

export const userFromJson = (item: any): UserModel => ({
    id: item.id, 
    first_name: item.first_name, 
    last_name: item.last_name, 
    phone_number: item.phone_number, 
    father_name: item.father_name, 
    national_code: item.national_code, 
    gender: item.gender, 
    birth_date: item.birth_date, 
    birth_place: item.birth_place, 
    department: item.department, 
    position: item.position, 
    work_phone: item.work_phone, 
    education_level: item.education_level, 
    jobs: item.jobs, 
});

export const defaultUser = (): any => ({
    id: 0,
    first_name: "",
    last_name: "",
    phone_number: "",
    father_name: "",
    national_code: "",
    gender: 0,
    birth_date: "",
    birth_place: "",
    department: "",
    position: "",
    work_phone: "",
    education_level: "",
    jobs: [],
});

