const baseCharset = 'abcdefghijklmnopqrstuvwxyz123456789.!?';
const wynnCharset = '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼０１２';
const gavelCharset = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ';

function translate()
{
  const originalText = document.getElementById('origTextInput').value;
  let translated = '';
  for (let i = 0; i < originalText.length; i++) {
    translated = translated + convert(originalText.charAt(i));
  }
  document.getElementById('translatedTextOutput').value = translated;
}

function convert(char) {
  var lang = document.getElementById('langDropdown').value;
  if (lang === 'g') {
    return toGavel(char.toLowerCase());
  }
  else {
    return toWynn(char.toLowerCase());
  }
  function toGavel(char) {
    if (baseCharset.includes(char) && isLetter(char)) {
      const index = baseCharset.indexOf(char);
      return gavelCharset.charAt(index);
    }
    return char;
  }
  function toWynn(char) {
    if (baseCharset.includes(char)) {
      const index = baseCharset.indexOf(char);
      return wynnCharset.charAt(index);
    }
    return char;
  }
  function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
  }
}

function copy() {
  let output = document.getElementById('translatedTextOutput');
  output.select();
  document.execCommand("copy");
}

document.addEventListener('DOMContentLoaded', function () {
  let tBtn = document.getElementById('translateButton');
  let cBtn = document.getElementById('copyButton');
  if (tBtn && cBtn) {
    tBtn.addEventListener('click', translate);
    cBtn.addEventListener('click', copy)
  }
});
