import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body?: AuthenticationParams;
};

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
