
export interface User {
    id: number,
    name: string,
    email: string,
    password?: string | undefined,
    status: boolean
}