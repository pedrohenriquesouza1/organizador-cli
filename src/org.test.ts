import {describe, expect, test} from '@jest/globals';
import { destino } from './org';
import { unifier } from './org';

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