function ConversionPart1() {
  var output = "";
  var intString = document.getElementById("1_UnsignedInt").value;
  var baseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
  var baseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

  var int = convertToBase10(intString, baseFrom);

  if (baseFrom == "NaN" || baseFrom < 2 || baseFrom > 36) {
    output = "INVALID INPUT BASE";
  } else if (baseTo == "NaN" || baseTo < 2 || baseTo > 36) {
    output = "INVALID OUTPUT BASE";
  } else if (int == -1) {
    output = "INVALID VALUE";
  } else {
    output = convertFromBase10(int, baseTo);
  }

  // Show the output on the screen
  FormatAndShowOutput([intString, baseFrom, baseTo, output], 1);
}
