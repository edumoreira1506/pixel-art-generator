const TOKEN_KEY = 'token';

export default class StorageService {
  static getToken(): string {
    return window.localStorage.getItem(TOKEN_KEY) || '';
  }

  static setToken(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  static clear(): void {
    window.localStorage.clear();
  }
}
