export interface UserModel {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    melli_code: string;
    birth_date: string;
    education_level: string;
    jobs: number[];
}

export const userFromJson = (item: any): UserModel => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    phone_number: item.phone_number,
    melli_code: item.melli_code,
    birth_date: item.birth_date,
    education_level: item.education_level,
    jobs: item.jobs,
});

export const defaultUser = (): any => ({
    id: 0,
    first_name: "",
    last_name: "",
    phone_number: "",
    melli_code: "",
    birth_date: "",
    education_level: "",
    jobs: [],
});

