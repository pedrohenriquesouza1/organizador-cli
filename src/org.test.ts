import {describe, expect, test} from '@jest/globals';
import { destino, unifier, validator } from './org';
describe('teste undefined', () =>{
    test('adiciona o mesmo path', () =>{
        expect(destino('/Documents', 'Materno')).toBe('/Documents/Materno')
    }); 
});

describe('unifica paths', () => {
    test('os paths do diretório e do arquivo se unificaão', () => {
        expect(unifier('"documentos de antepassados"', 'Downloads/archive.jpg')).toBe('"documentos de antepassados"/archive.jpg')
    });
});

describe('testa função validator', () => {
    test('testa um código de erro da função validator', () => {
        expect(() => {
            validator(undefined, undefined)
        }).toThrow(new Error("Arquivo ou diretório não encontrado, tente outro path ou procure erros de sintaxe"))
    })
});