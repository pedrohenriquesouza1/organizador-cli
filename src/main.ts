import fs from "node:fs"

let raizPath = process.argv[2]
let archivePath = process.argv[3]

if (raizPath == undefined || archivePath == undefined) {
    console.log("Arquivo não encontrado, tente novamente com outro caminho")
    process.exit(1) 
}

if(fs.existsSync(archivePath)) {
    //vou continuar daqui
} else {
    console.log("O Arquivo que colocou não existe, veja se não errou o nome e tente novamente")
    process.exit(1)
} 