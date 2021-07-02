// Select items
var poundsInput = document.getElementById('lbs-input');
var gramsOutput = document.getElementById('grams-output');
var kilogramsOutput = document.getElementById('kg-output');
var ouncesOutput = document.getElementById('oz-output');
var output = document.getElementById('output');

// Hide outputs
output.style.visibility = 'hidden';

// Convert inputed weight
poundsInput.addEventListener('input', convertWeight);

function convertWeight(e){
    // Show output
    output.style.visibility = 'visible';

    // Get input weight in pounds
    var poundsInput = e.target.value;

    // Obtain output weights in grams, kilograms and ounces
    gramsOutput.innerHTML = Math.round(poundsInput / 0.0022046);
    kilogramsOutput.innerHTML = Math.round(poundsInput / 2.2046);
    ouncesOutput.innerHTML = Math.round(poundsInput * 16);
}

