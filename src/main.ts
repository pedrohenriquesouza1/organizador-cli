import fs from "node:fs"
import { select } from "@inquirer/prompts"
import path, { join } from "node:path"
import chalk from "chalk"

let raizPath = process.argv[3]
let archivePath = process.argv[2]
const success = chalk.bold.green
const err = chalk.underline.red

if (raizPath == undefined || archivePath == undefined) {
    console.log(err("Arquivo não encontrado, tente novamente com outro caminho"))
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
   const destino = path.join(raizPath, resMaterno_Paterno);
   let archiveDes = path.join(destino, path.basename(archivePath))

   fs.mkdirSync(destino, {recursive: true});
   fs.renameSync(archivePath, archiveDes);
   console.log(success("O arquivo foi movido com sucesso!"))
} else {
    console.log(err("O Arquivo que colocou não existe, veja se não errou o nome e tente novamente"))
    process.exit(1)
} 