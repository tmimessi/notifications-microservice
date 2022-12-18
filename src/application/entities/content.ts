// separando em  uma classe um atributo específico da entidade principal de notificação pra consguir fazer operações nesse atributo de forma isolada; ex. validação.

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validadeContentLength(content);
    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }

    this.content = content;
  }
}
