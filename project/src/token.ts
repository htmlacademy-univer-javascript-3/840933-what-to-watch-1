const TOKEN_NAME = 'what-to-watch-token';

export function saveToken(token:string) {
  localStorage.setItem(TOKEN_NAME, token);
}

export function getToken() :string|null {
  return localStorage.getItem(TOKEN_NAME);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_NAME);
}
