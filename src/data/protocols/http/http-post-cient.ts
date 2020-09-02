import { AuthenticationParams } from '../../../domain/usecases/authentication';

export type HttpPostParams = {
  url: string;
  body?: AuthenticationParams;
};

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>;
}
