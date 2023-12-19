/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }
  const newStr1 = str1.toLowerCase();
  const newStr2 = str2.toLowerCase();

  const sortedStr1 = newStr1.split('').sort().join('');
  const sortedStr2 = newStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
