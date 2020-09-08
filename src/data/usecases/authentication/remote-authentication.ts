import { HttpPostClient } from '@/data/protocols/http';
import { Authentication, AuthenticationParams } from '@/domain/usecases';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/error';
import { AccountModel } from '@/domain/models';

export class RemoteAuthentication implements Authentication {
  private readonly url: string;
  private readonly httpPostClient: HttpPostClient<
    AuthenticationParams,
    AccountModel
  >;

  constructor(url: string, httpPostClient: any) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
