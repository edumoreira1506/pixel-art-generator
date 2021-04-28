import api from './api';

import { CallbackType } from '../@types/callbacks';

export default class UserService {
  static async store(username: string, password: string, confirmPassword: string, callbacks: CallbackType): Promise<void> {
    return api.post('/users', { username, password, confirmPassword }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }
}
