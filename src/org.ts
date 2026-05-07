import path from "node:path"
export function destino (pathRaiz: string, parte: string) : string {
    return path.join(pathRaiz, parte)
}

export function unifier (pathDestino: string, pathArquivo: string) : string {
    return path.join(pathDestino, path.basename(pathArquivo))
}