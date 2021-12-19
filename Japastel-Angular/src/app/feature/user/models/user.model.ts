export interface User {
    id: number,
    name: string,
    cpf: string,
    email?: string,
    tel?: string,
    password: string,
    type: 'adm' | 'employee' | 'client'
}