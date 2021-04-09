

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
    document.getElementById('todate').style.display = "block"

    //function to get day

    function get_day() {
        
        var dy = (dd % 7)
        
        const i = dy.toFixed();
        let days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let female= ["Akosua","Adwoa", "Abena","Akua","Yaa","Afua","Ama"];

        var gender = document.querySelector("#cb1");
        //Logic to validate date
        if (gender.checked) {

            document.getElementById('dw2').innerHTML = "You were born on " + days[i];
            document.getElementById('akan').innerHTML = "Your Akan Name is " + male[i];

        }else{
            document.getElementById('dw2').innerHTML = "You were born on " + days[i];
            document.getElementById('akan').innerHTML = "Your Akan Name is " + female[i];

        }

        




    }
    get_day();

}

