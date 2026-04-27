import fs from "node:fs"
import { select } from "@inquirer/prompts"
import path, { join } from "node:path"
import { mkdir } from "node:fs/promises" //essa lib tem pouca informação disponível (que eu encontrei), vou tentar achar mais coisas no futuro

let raizPath = process.argv[2]
let archivePath = process.argv[3]

if (raizPath == undefined || archivePath == undefined) {
    console.log("Arquivo não encontrado, tente novamente com outro caminho")
    process.exit(1) 
}

if(fs.existsSync(archivePath)) {
   const resMaterno_Paterno = await select({
    message: "Esse arquivo é para a pasta Materno ou Paterno?",
    choices: [
           {
            name: 'Materno',
            value: 'Materno',
            description: "Representa o lado materno da árvore genealógica, se escolher esse seu arquivo vai diretamente para a pasta Materno"
        },
        {
            name: 'Paterno',
            value: 'Paterno',
            description: "Representa o lado paterno da árvore genealógica, se escolher esse arquivo ele vai direto para a pasta paterno dentro da pasta que designou no começo do programa"
        }
    ]
   });
   const destino = path.join(raizPath, resMaterno_Paterno)
   
   if(fs.existsSync(destino)) {
        //pensando se, na arquitetura, vale a pena manter esse if para seguir código claro e legível
   }
} else {
    console.log("O Arquivo que colocou não existe, veja se não errou o nome e tente novamente") 
    process.exit(1)
} 