import { HttpPostClient } from '../protocols/http/http-post-cient';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  async post(url: string): Promise<void> {
    this.url = url;

    return Promise.resolve();
  }
}
