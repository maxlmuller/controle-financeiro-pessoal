export class Movimentacao {
  static readonly TIPO_RECEITA = 'receita';
  static readonly TIPO_DESPESA = 'despesa';
  descricao: string;
  valor: number;

  constructor(descricao: string, valor: number, public tipo: string) {
    this.descricao = descricao;
    this.valor = valor;
    this.tipo = tipo;
  }
}
