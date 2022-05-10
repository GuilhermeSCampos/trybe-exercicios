function encode(string) {
    let temp = "";
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
        case 'a': 
          temp += '1';
          break;
        case 'e':
          temp += '2';
          break;
        case 'i':
          temp += '3';
          break;
        case 'o':
          temp += '4';
          break;
        case 'u':
          temp += '5';
          break;
        default:
          temp += string[index];
      }
    }
    return temp;
  }

  function decode(string) {
    let temp = "";
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
        case '1': 
          temp +='a';
          break;
        case '2':
          temp +='e';
          break;
        case '3':
          temp +='i';
          break;
        case '4':
          temp +='o';
          break;
        case '5':
          temp +='u';
          break;
        default:
          temp += string[index];
      }
    }
    return temp;
  }
  module.exports = {encode, decode};