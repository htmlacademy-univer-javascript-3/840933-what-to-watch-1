export const checkPassword = (password: string) => (/[a-z]/.test(password) || /[а-я]/.test(password)) && /[0-9]/.test(password);

