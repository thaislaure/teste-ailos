import { Count } from "./conta";

export interface Client {
  id: number;
  nome: string;
  cpf: string;
  situacao: string;
  contas : Count[];
}
