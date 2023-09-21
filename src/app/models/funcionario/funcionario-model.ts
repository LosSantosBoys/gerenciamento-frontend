export interface FuncionarioRequest {
    nome: string;
    cpf: string;
    email: string;
    cargo: string;
    username: string;
    senha: string;
    tipoAutorizacao: string;
    dataAdmissao: Date;
    salario: number;
    areaAtuacao: string;
}