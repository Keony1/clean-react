import { HttpPostClient } from '../../protocols/http/http-post-cient';

export class RemoteAuthentication {
  private readonly url: string;
  private readonly htpPostClient: HttpPostClient;

  constructor(url: string, httpPostClient: any) {
    this.url = url;
    this.htpPostClient = httpPostClient;
  }

  async auth(): Promise<void> {
    await this.htpPostClient.post(this.url);
  }
}
