export interface LoginResponse {
    msg?: String,
    Ok?: boolean,
    token?: String
}

export interface UsuarioResponse {
    msg?: String,
    Ok?: boolean,
    Object: Object[]
}

export interface Object {
    _id?: String,
    nome?: String,
    email?: String,
    senha?: String,
}