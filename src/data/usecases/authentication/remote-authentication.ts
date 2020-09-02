import {
  HttpPostClient,
  HttpPostParams,
} from '../../protocols/http/http-post-cient';

export class RemoteAuthentication {
  private readonly url: string;
  private readonly httpPostClient: HttpPostClient;

  constructor(url: string, httpPostClient: any) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(): Promise<void> {
    await this.httpPostClient.post({ url: this.url });
  }
}
