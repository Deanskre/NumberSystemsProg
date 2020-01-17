function FormatAndShowOutput(values, part) {
   switch (part) {
     case 1:
      document.getElementById('ConversionOutput').textContent =
        values[0] + " in base " + values[1] + " is " +
        values[3] + " in base " + values[2];
     break;
     case 2:
       document.getElementById('ConversionOutput').textContent =
          values[1] + " has a signed binary rep of: " + values[0];
       break;
     case 3:
        document.getElementById('ConversionOutput').textContent = values[0] +
          " is represented in 32 bits by the following " + values[1];
        break;
     default:
        alert("WTF HAVE YOU DONE!!!");
        break;
   }
}

var digits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//converts a base-X integer into a base-10 integer (receives string, returns int)
function convertToBase10 (str, base) {
  var output = 0;
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode > 47 && charCode < 58) {
      output += (charCode - 48) * (Math.pow(base, str.length-1-i));
    } else if (charCode > 64 && charCode < 91) {
      output += (charCode - 55) * (Math.pow(base, str.length-1-i));
    } else {
      return -1;
    }
  }
  return output;
}

//converts a base-10 integer into a base-X integer (receives int, returns string)
function convertFromBase10(int, base) {
  var output = "";
  while (int != 0) {
    var nextDigit;
    if (int % base < base) {
      nextDigit = digits[int % base];
      int = Math.floor(int/base);
    } else {
      nextDigit = digits[base];
      int = Math.floor(int/base) + base - (int % base);
    }
    output = nextDigit + output;
  }
  return output;
}
