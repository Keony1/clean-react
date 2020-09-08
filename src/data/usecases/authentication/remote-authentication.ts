import { HttpPostClient } from '@/data/protocols/http/http-post-client';

import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError } from '@/domain/error/invalid-credentials-error';
import { UnexpectedError } from '@/domain/error/unexpected-error';
import { AccountModel } from '@/domain/models/account-model';

export class RemoteAuthentication {
  private readonly url: string;
  private readonly httpPostClient: HttpPostClient<
    AuthenticationParams,
    AccountModel
  >;

  constructor(url: string, httpPostClient: any) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
