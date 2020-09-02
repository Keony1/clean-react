export class UnexpectedError extends Error {
  constructor() {
    super('Algo não está certo. Tente novamente mais tarde');
    this.name = 'UnexpectedError';
  }
}
