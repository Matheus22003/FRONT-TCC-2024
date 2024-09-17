export interface Cliente {
    clienteId: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    dataCadastro: string; // ISO string format for DateOnly
  }
  
  export interface Fibra {
    id: number;
    tipo: string;
    velocidade: string;
    plano: string;
    clienteId: number;
    cliente?: Cliente; // Optional, since it may be lazy-loaded
  }
