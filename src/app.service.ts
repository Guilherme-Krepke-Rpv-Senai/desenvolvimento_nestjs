import { Injectable } from '@nestjs/common';
import { get } from 'http';

// 1. Criar um novo projeto de nome "escola-senai" , contendo um endpoint Get() que retorne como mensagem , "Bem-vindo ao SENAI".

// 2. No app.controller.ts ( escola-senai ), crie uma nova rota get "info" , o método deve retornar um objeto com: `disciplina`, `carga-horaria`, `semestre` e `ativo: true`.


export interface Iinfo{
  disciplina:string,
  carga_horaria: number,
  semestre: number,
  ativo: boolean
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem-vindo ao SENAI';
  }


  getInfo():Iinfo{
    return {
      disciplina: "desenvolvimento web",
      carga_horaria: 120,
      semestre: 2,
      ativo: true
    }
  }
}
