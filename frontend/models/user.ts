export interface UserModel {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
}

export const userFromJson = (item: any): UserModel => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    phone_number: item.phone_number,
});

export const defaultUser = (): any => ({
    id: 0,
    first_name: "",
    last_name: "",
    phone_number: "",
});

