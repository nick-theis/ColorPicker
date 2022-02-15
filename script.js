// Nick Theis 2-14-22
// Main function in Color Hopper to convert RGB to Barycentric Maxwell hues

function Calculate() {
  // Grabbing values in HTML form entered by user
  var red = parseInt(document.getElementById('red').value);
  var green = parseInt(document.getElementById('green').value);
  var blue = parseInt(document.getElementById('blue').value);

  // Grabbing text boxes to enter conversion values into
  var rho = document.getElementById('rho');
  var gamma = document.getElementById('gamma');
  var beta = document.getElementById('beta');
  var luminance = document.getElementById('luminance');

  // Validating user input
  if (red == "" || isNaN(red)) {
    alert("Please enter a valid value for R");
  }

  if (green == "" || isNaN(green)) {
    alert("Please enter a valid value for G");
  }

  if (blue == "" || isNaN(blue)) {
    alert("Please enter a valid value for B");
  }

  //console.log('var red: ' + red + ' var green: ' + green + ' var blue: ' + blue);
  // Totaling RGB values
  var total = red + green + blue;

  //console.log('Total: ' + total);

  // Converting R, G, B, to rho, gamma, beta
  var rhoValue = ConvertedValue(red);
  var gammaValue = ConvertedValue(green);
  var betaValue = ConvertedValue(blue);

  //console.log('rho: ' + rhoValue);
  //console.log('gamma: ' + gammaValue);
  //console.log('beta: ' + betaValue);

  // Displaying converted values to user in form text boxes
  rho.value = rhoValue;
  gamma.value = gammaValue;
  beta.value = betaValue;

  var luminanceValue = Math.max(rhoValue, gammaValue, betaValue);
  luminance.value = luminanceValue;

  // Helper function to convert RGB to Barycentric Maxwell hues
  function ConvertedValue(color) {
    return Math.round((1/total) * color * 1000) / 1000;
  }
  
}

 