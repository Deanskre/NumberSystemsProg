function ConversionPart2() {
  var int = parseInt(document.getElementById("2_SignedInt").value);
  var sign = 0;
  var output = "1";

  if (int == "NaN") {
    output = "INVALID VALUE";
  } else {

    //if negative integer, subtract 1 and make positive to convert
    if (int < 0) {
      sign = 1;
      int = -1*int - 1;
    }

    //converts positive integer to unsigned binary
    var temp = convertFromBase10(int, 2);

    //if supposed to be negative, flip the bits and keep the 1
    if (sign == 1) {
      for (var i = 0; i < temp.length; i++) {
        output += (temp.charAt(i) == "0" ? "1" : "0");
      }
      int = -1*(int + 1);
    } else {
      output = "0" + temp;
    }
  }

  // Show the output on the screen
  FormatAndShowOutput([output, int], 2);
}
