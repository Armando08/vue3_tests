export interface User {
    email: string;
    gender: string;
    id: number;
    name: string;
    status: string;
}
export interface Posts {
    body: string;
    id: number;
    title: string;
    user_id: number;
}

export interface Todos {
    body: string;
    id: number;
    title: string;
    status: 'completed' | 'pending';
    due_on: string;
    user_id: number;
}

export interface ResponseStructure {
    data: User | Posts | Todos
}