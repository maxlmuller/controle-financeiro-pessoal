export class Movimentacao {
  static readonly TIPO_RECEITA = 'receita';
  static readonly TIPO_DESPESA = 'despesa';
  descricao: string;
  valor: number;
  public id: number;

  constructor(descricao: string, valor: number, public tipo: string) {
    this.id = Math.round(Math.random() * 10000);
    this.descricao = descricao;
    this.valor = valor;
    this.tipo = tipo;
  }
}
