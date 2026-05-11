import path from "node:path"
export function destino (pathRaiz: string, parte: string) : string {
    return path.join(pathRaiz, parte)
}

export function unifier (pathDestino: string, pathArquivo: string) : string {
    return path.join(pathDestino, path.basename(pathArquivo))
}

export function validator(raizPath: string | undefined, path_doArquivo: string | undefined) {
    if (raizPath == undefined || path_doArquivo == undefined) {
        throw new Error("Arquivo ou diretório não encontrado, tente outro path ou procure erros de sintaxe")
    }
}
