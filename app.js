//Function to validate the form


function thisDate() {
    var dd = Number(document.getElementById('date').value);
    var mm = Number(document.getElementById('month').value);
    var yy = Number(document.getElementById('year').value);
    //Function to validate the date entered by the user
    function dateValidation() {

        // Logic 

        if (isNaN(dd) || dd < 1 || dd > 31) {
            alert("Invalid Date");
            document.getElementById('date').value = null;
            document.getElementById('date').style.border = ("1px solid red");
            // return false;

        } else {


            document.getElementById("dt1").innerHTML = dd;
            document.getElementById('date').style.border = ("1px solid rgb(25, 235, 6)");

        }
    }
    dateValidation();

    //function to validate month
    function monthValidation() {
        //Logic

        if (isNaN(mm) || mm < 1 || mm > 12) {
            alert("Invalid month");
            document.getElementById('month').value = null;
            document.getElementById('month').style.border = ("1px solid red");
            return false;


        } else {


            document.getElementById("dt2").innerHTML = mm;
            document.getElementById('month').style.border = ("1px solid rgb(25, 235, 6)");

        }
    }
    monthValidation();
    //Function to validate year
    function yearValidation() {

        //Logic to validate year

        if (isNaN(yy) || yy < 1950 || yy > 2021) {
            alert("Invalid year");
            document.getElementById('year').value = null;
            document.getElementById('year').style.border = ("1px solid red");
            return false;
        } else {

            document.getElementById('dt3').innerHTML = yy;
            document.getElementById('year').style.border = ("1px solid rgb(25, 235, 6)");
        }

    }
    yearValidation();
    document.getElementById('todate').style.display = "block"

    //Function to get day

    function get_day() {

        const i = (dd % 7);

        let days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let female = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

        var gender = document.querySelector("#cb1");

        //Logic to validate gender chosen 

        if (gender.checked) {

            document.getElementById('dw2').innerHTML = "You were born on " + days[i];
            document.getElementById('akan').innerHTML = "Your Akan Name is " + male[i];

        } else {
            document.getElementById('dw2').innerHTML = "You were born on " + days[i];
            document.getElementById('akan').innerHTML = "Your Akan Name is " + female[i];

        }

    }
    get_day();

}
//Reset function

function clear() {

    document.getElementById("dt1").innerHTML = " ";
    document.getElementById("dt2").innerHTML = " ";
    document.getElementById('dt3').innerHTML = " ";
    document.getElementById('dw2').innerHTML = " ";
    document.getElementById('akan').innerHTML = " ";
    document.getElementById('todate').style.display = "none";



}