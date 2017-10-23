document.getElementById("employeesWeeklyHours").addEventListener("submit", function(e){
  e.preventDefault();

  var hoursWorked = 0;
  var hourRate = 0;
  var overtimeHours;
  var grossPay;

  for (var i = 0; i < 6; i++) {
    hoursWorked = document.getElementById(`hours${i + 1}`).valueAsNumber;
    hourRate = document.getElementById(`rate${i + 1}`).valueAsNumber;

    if (typeof(hoursWorked) !== 'number') {
      document.alert('Hours and rates should be inputed as integers');
    }

    if (isNaN(hoursWorked)) {
      hoursWorked = 0;
    }

    if (isNaN(hourRate)) {
      hourRate = 0;
    }

    if (hoursWorked > 40) {
      overtimeHours = hoursWorked - 40;
      grossPay = 40 * hourRate + (overtimeHours * 1.5 * hourRate);
    } else {
      grossPay = hoursWorked * hourRate;
    }

    console.log('hoursWorked: ', hoursWorked);
    console.log('hourRate: ', hourRate);
    console.log('grossPay: ', grossPay);

    document.getElementById(`f_hours${i + 1}`).value = hoursWorked.toFixed(2);
    document.getElementById(`f_rate${i + 1}`).value = hourRate.toFixed(2);
    document.getElementById(`gross${i + 1}`).value = grossPay.toFixed(2);
  }
});
document.getElementById("employeesWeeklyHours").addEventListener("reset", function(e){
  console.log('resetou');
  for (var i = 0; i < 6; i++) {
    document.getElementById(`f_hours${i + 1}`).value = '';
    document.getElementById(`f_rate${i + 1}`).value = '';
    document.getElementById(`gross${i + 1}`).value = '';
  }
});
