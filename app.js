// function to validate input Dates
//let dd = parseInt(document.getElementById('date').value);
//var  mm = Number(document.getElementById('month').value);
//var yy = Number(document.getElementById('year').value);







function thisDate() {
    var dd = Number(document.getElementById('date').value);
    var mm = Number(document.getElementById('month').value);
    var yy = Number(document.getElementById('year').value);

    function dateValidation() {
        if (isNaN(dd) || dd < 1 || dd > 31) {
            alert("Invalid Date");
            document.getElementById('date').value = " ";
            document.getElementById('date').style.border = ("1px solid red");

        } else {
            alert(" Valid date");

            document.getElementById("dt1").innerHTML = dd;
            document.getElementById('date').style.border = ("0.8px solid black");

        }
    }
    dateValidation();

    //function to validate month
    function monthValidation() {
        if (isNaN(mm) || mm < 1 || mm > 12) {
            alert("Invalid month");
            document.getElementById('month').value = " ";
            document.getElementById('month').style.border = ("1px solid red");


        } else {
            alert("Valid month");

            document.getElementById("dt2").innerHTML = mm;

        }
    }
    monthValidation();
    //    function to validate year
    function yearValidation() {
        if (isNaN(yy) || yy < 1950 || yy > 2021) {
            alert("Invalid year");
            document.getElementById('year').value = " ";
            document.getElementById('year').style.border = ("1px solid red");
        } else {
            alert("Valid year");
            document.getElementById('dt3').innerHTML = yy;
        }
    }
    yearValidation();
    document.getElementById('todate').style.display="block"

    //function to get day

    function get_day() {
        // var day = dd.getDay();
         var dy= (dd%6)
        //  for(dy=0;dy<5; dy++){
        //      alert("")
        //  }
        //const dyb = Date.Parse(document.getElementById('todate').value);
       const  i = dy.toFixed();
       var days =["sunday","Monday", "Tuesday" , "Wednesday","Thursday" , "Friday", "Saturday"];
       var male= ["Kwasi", "Kwadwo" , "Kwabena","Kwaku", "Yaw","Kofi", "Kwame"];

    //    if(checkbox(male)==checked){
    //        alert("");
    //    }if(checkbox(male)==checked){
    //        alert("");
    //    }

        document.getElementById('dw1').innerHTML =  "Date " + i +" of the week";
        document.getElementById('dw2').innerHTML = "You wer born on " + days[i];
        document.getElementById('dw2').style.color="red";
        document.getElementById('dw2').style.fontSize="15px";
        document.getElementById('akan').innerHTML= "Your Akan Name is " + male[i];




    }
    get_day();

}

// var day