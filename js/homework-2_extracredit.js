console.log("cnit133_hw2_extracredit");


var poundsRate,
    cdollarsRate,
    euroRate,
    yensRate,
    pesosRate,
    pounds,
    cdollars,
    euro,
    yens,
    pesos,
    dollars;

$(document).ready(function() {
    var x = 0;
    $("#pounds").val(x.toFixed(2));
    $("#cdollars").val(x.toFixed(2));
    $("#euro").val(x.toFixed(2));
    $("#yens").val(x.toFixed(2));
    $("#pesos").val(x.toFixed(2));

    $("#calculateBtn").click(function() {
        poundsRate = $("#poundsRate").val();
        cdollarsRate = $("#cdollarsRate").val();
        euroRate = $("#euroRate").val();
        yensRate = $("#yensRate").val();
        pesosRate = $("#pesosRate").val();
        dollars = $("#dollars").val();

        pounds = dollars * poundsRate;
        cdollars = dollars * cdollarsRate;
        euro = dollars * euroRate;
        yens = dollars * yensRate;
        pesos = dollars * pesosRate;

        $("#pounds").val(pounds.toFixed(2));
        $("#cdollars").val(cdollars.toFixed(2));
        $("#euro").val(euro.toFixed(2));
        $("#yens").val(yens.toFixed(2));
        $("#pesos").val(pesos.toFixed(2));
    });

    $("#resetBtn").click(function() {
        $("#pounds").val(x.toFixed(2));
        $("#cdollars").val(x.toFixed(2));
        $("#euro").val(x.toFixed(2));
        $("#yens").val(x.toFixed(2));
        $("#pesos").val(x.toFixed(2));
        $("#dollars").val("");
        $("#dollars").css('background-color','white');
    });

    $("#instructionsBtn").click(function(){
    	$("#instructions").slideToggle("slow");
    });


    $('#dollars').focus(function() {
		$(this).css('background-color','red');
	});


});
