export interface User {
    email: string;
    gender: string;
    id: number;
    name: string;
    status: string;
}

export interface ResponseStructure {
    data: Array<User>
}