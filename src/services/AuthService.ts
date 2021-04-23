import api from './api';

import { CallbackType } from '../@types/callbacks';

export default class AuthService {
  static async login(username: string, password: string, callbacks: CallbackType): Promise<void> {
    return api.post('/auth', { username, password }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }
}
