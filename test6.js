function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return reversedWord.toLowerCase() === word.toLowerCase();
}