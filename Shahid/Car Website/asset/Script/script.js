
// Contact Form Page
function validateform() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (name == '' || email == '') {

        if (name == "") {
            document.getElementById('username').innerHTML = " **Please Enter Your Name";
            document.getElementById('name').style.border = "2px solid red";

            // alert("Name can't be blank");

        }

        if (email == "") {
            document.getElementById('useremail').innerHTML = " **Please Enter Your Email";
            document.getElementById('email').style.border = "2px solid red";
            // alert("Email can't be blank");

        }
        return false;

    }
    return true;
}

    function Inputname(){
            document.getElementById('name').style.border = "1px solid gray";
            document.getElementById('username').style.display = "none";     
    }
    function inputemail(){
        document.getElementById('email').style.border = "1px solid gray";
        document.getElementById('useremail').style.display = "none";
    }




// Alert Function
    function myAlertTop() {
        $(".myAlert_top-d").show();
        setTimeout(function () {
            $(".myAlert_top-d").hide();
        }, 3000);
    }


