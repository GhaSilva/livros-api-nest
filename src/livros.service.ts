import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro('L1V01', 'Livro Java', 39.9),
    new Livro('L1V02', 'Livro Python', 20.5),
    new Livro('L1V03', 'Livro Kotlin', 60.0),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}
