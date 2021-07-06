export interface LoginResponse {
    msg?: string,
    Ok?: boolean,
    token?: string
}

export interface TokenResponse{
    msg?: string,
    Ok?: boolean
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
    Sigla: string;
    Position: number;
    Tipo: string;
    Quantidade: number;
    Valor: number;
}

