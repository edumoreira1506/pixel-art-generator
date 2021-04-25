import api from './api';

import { CallbackType } from '../@types/callbacks';

export default class FolderService {
  static async index(token: string, callbacks: CallbackType): Promise<void> {
    return api.get('/folders', {
      headers: {
        Authorization: token
      }
    }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }

  static async store(token: string, name: string, callbacks: CallbackType): Promise<void> {
    return api.post('/folders', { name }, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }

  static async update(token: string, name: string, id: string, callbacks: CallbackType): Promise<void> {
    return api.patch(`/folders/${id}`, { name }, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }

  static async remove(token: string, id: string, callbacks: CallbackType): Promise<void> {
    return api.delete(`/folders/${id}`, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }

  static async getFolderArts(token: string, folderId: string, callbacks: CallbackType): Promise<void> {
    return api.get(`/folders/${folderId}/arts`, {
      headers: {
        Authorization: token
      }
    }).then(response => {
      const { data } = response;

      return callbacks.onSuccess(data);
    }).catch(errors => {
      const error = errors?.response?.data?.error;

      return callbacks.onError(error?.message ?? '');
    });
  }
}
