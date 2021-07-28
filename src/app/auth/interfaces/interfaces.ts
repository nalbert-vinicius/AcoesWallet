import { Token } from "@angular/compiler/src/ml_parser/lexer";

export interface LoginResponse {
    msg?: string,
    Ok?: boolean,
    nome?: string,
    token?: string
}

export interface TokenResponse{
    msg?: string,
    Ok?: boolean,
    nome?: string,
    token?: string
}

export interface UsuarioResponse {
    msg?: string,
    Ok?: boolean,
    Object: Object[]
}

export interface Object {
    _id?: string,
    nome?: string,
    email?: string,
    senha?: string,
}

export interface Usuarios {
    nome?: string,
    email?: string,
    senha?: string,
}

export interface Operacao {
    _id: string,
    dataInicio: Date;
    quantidade: number;
    tag: string;
    tipoOperacao: string;
    usuario: User[],
    valorUnitario: number
}

export interface User {
    email: string,
    _id: string
}


export interface GraficoPizza {
    name: string,
    value: number
}







