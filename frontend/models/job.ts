export interface JobModel {
    id: number;
    name: string;
    description: string;
    created_at: string;
}

export const jobFromJson = (item: any): JobModel => ({
    id: item.id,
    name: item.name,
    description: item.description,
    created_at: item.created_at,
});