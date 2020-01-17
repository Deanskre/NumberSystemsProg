
function ConversionPart3() {
  var floatString = document.getElementById("3_Float").value;
  var originalFloat = floatString;
  var float = parseFloat(floatString);
  var output = "";

  if (parseFloat(floatString) == "NaN") {
    output = "INVALID VALUE";
  } else if (parseFloat(floatString) == 0) {
    output = "00000000000000000000000000000000";
  } else {

    //sign
    if (float < 0) {
      output = "1";
      floatString = floatString.substring(1);
      float *= -1;
    } else {
      output = "0";
    }

    //exponent
    var exponent = 0;
    while (float >= 2 || float < 1) {
      if (float >= 2) {
        float *= 1/2;
        exponent += 1;
      } else {
        float *= 2;
        exponent -= 1;
      }
    }
    var binaryExponent = convertFromBase10(exponent + 127, 2);
    if (binaryExponent.length > 8 || exponent < -127) {
      output = "INVALID VALUE";
    } else {
      for (var i = 0; i < 8 - binaryExponent.length; i++) {
        output += "0";
      }
      output += binaryExponent;

      //mantissa
      var mantissa = "";
      float -= 1;
      if (float == 0) {
        mantissa = "00000000000000000000000";
      } else {
        floatString = (float.toString()).substring(2);
        if (floatString.length > 7) {
          floatString = floatString.substring(0,8);
        }
        if (parseInt(floatString) > 8388607) {
          floatString = "0" + floatString.substring(0,7);
        }
        mantissa = convertFromBase10(parseInt(floatString), 2);
      }
      for (var i = 0; i < 23 - mantissa.length; i++) {
          output += "0";
      }
      output += mantissa;
    }
  }
  // Show the output on the screen
  FormatAndShowOutput([originalFloat, output], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
