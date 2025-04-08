export interface UserModel {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    melli_code: string;
    created_at: number;
}

export const userFromJson = (item: any): UserModel => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    phone_number: item.phone_number,
    melli_code: item.melli_code,
    created_at: item.created_at,
});

