import fs from "node:fs";
import { select } from "@inquirer/prompts";
import chalk from "chalk";
import {destino, unifier, validator} from "./org"
async function organizer() {
  let raizPath = process.argv[3];
  let archivePath = process.argv[2];
  const success = chalk.bold.green;
  const err = chalk.underline.red;

  validator(raizPath, archivePath);
  
  if (fs.existsSync(archivePath)) {
    const resMaterno_Paterno = await select({
      message: "Esse arquivo é para a pasta Materno ou Paterno?",
      choices: [
        {
          name: "Materno",
          value: "Materno",
          description:
            "Representa o lado materno da árvore genealógica, se escolher esse seu arquivo vai diretamente para a pasta Materno",
        },
        {
          name: "Paterno",
          value: "Paterno",
          description:
            "Representa o lado paterno da árvore genealógica, se escolher esse arquivo ele vai direto para a pasta paterno dentro da pasta que designou no começo do programa",
        },
      ],
    });
    const caminhoDes = destino(raizPath, resMaterno_Paterno);
    let archiveDes = unifier(caminhoDes, archivePath);

    fs.mkdirSync(caminhoDes, { recursive: true });
    fs.renameSync(archivePath, archiveDes);
    console.log(success("O arquivo foi movido com sucesso!"));
  } else {
    console.log(
      err(
        "O Arquivo que colocou não existe, veja se não errou o nome e tente novamente",
      ),
    );
    process.exit(1);
  }
}
