function isSafePassword(password) {
  return password.length >= 8 && /[\W_]/.test(password);
}