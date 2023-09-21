export interface FilmeResponse {
    id: number;
    titulo: string;
    genero: string;
    descricao: string;
    duracao: string;
    emCartaz: boolean;
    classificacaoIndicativa: string;
    urlImagem: {
      url: string;
    };
  }