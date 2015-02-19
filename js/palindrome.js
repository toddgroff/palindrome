function isPalindrome(str) {
  var arr = str.split('');
  var arrHalf = arr.length / 2;
  var arrHalfInt = Math.floor(arrHalf);
  var arrFirstHalf = arr.slice(0, arrHalfInt);
  var arrSecondHalf = [];

  if (arr.length % 2 !== 0) {
    arrSecondHalf = arr.slice((arrHalfInt + 1), arr.length);
  } else {
    arrSecondHalf = arr.slice(arrHalfInt, arr.length);
  }

  var arrReversed = arrSecondHalf.reverse();
  var strFirstHalf = arrFirstHalf.join('');
  var strSecondHalf = arrReversed.join('');

  return strFirstHalf === strSecondHalf;
}
