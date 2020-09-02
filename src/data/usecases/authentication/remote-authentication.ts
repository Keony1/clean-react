import {
  HttpPostClient,
  HttpPostParams,
} from '../../protocols/http/http-post-cient';

import { AuthenticationParams } from '../../../domain/usecases/authentication';

export class RemoteAuthentication {
  private readonly url: string;
  private readonly httpPostClient: HttpPostClient;

  constructor(url: string, httpPostClient: any) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
  }
}
