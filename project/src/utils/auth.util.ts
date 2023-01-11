export const checkPassword = (password: string) => (/[a-z]/.test(password.toLowerCase()) || /[а-я]/.test(password.toLowerCase())) && /[0-9]/.test(password.toLowerCase());

