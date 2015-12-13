var $prior = $('#priorProbability');
var $hypothesisTrue = $('#ifHypothesisTrue');
var $hypothesisFalse = $('#ifHypothesisFalse');
var $calculateButton = $('#calculate');

function confirmInput(){

$(this).next().show();
    var intConversion = parseInt($(this).val());
    console.log(intConversion);
if (isNaN(intConversion)){
 // console.log(parseInt($(selector).val())!==NaN);
  $(this).next().show();
} else{
   $(this).next().hide();
   return intConversion;
}

}

function calculate(){
var prior = parseInt($prior.val());
var hypoTrue = parseInt($hypothesisTrue.val());
var hypoFalse = parseInt($hypothesisFalse.val());
var posteriorProb = 100*(prior*hypoTrue)/((prior*hypoTrue)+(hypoFalse*(100-prior)));
$("h1").text("The Posterior Probability is " + parseInt(posteriorProb) + "%");
//alert("The Posterior Probability is " + parseInt(posteriorProb) + "%");
event.preventDefault();
}

// hide the spans
$('span').hide();

$prior.keyup(confirmInput).focus(confirmInput);
$hypothesisTrue.keyup(confirmInput).focus(confirmInput);
$hypothesisFalse.keyup(confirmInput).focus(confirmInput);
$("form").submit(calculate);
