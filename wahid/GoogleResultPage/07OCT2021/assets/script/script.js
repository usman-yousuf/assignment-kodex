document.addEventListener('DOMContentLoaded', function () {

    // Image Page Scroll Function 


    // RIGHT SLIDER 

    // const slideright = document.getElementById('scroll_right_toggler-d');

    // slideright.onclick = function () {
    //   document.getElementById('slider_div-d').scrollLeft += 1250;
    // }; 

    // // LEFT SLIDER 

    // const slideLeft = document.getElementById('scroll_left_toggler-d');

    // slideLeft.onclick = function () {
    //   document.getElementById('slider_div-d').scrollLeft -= 1250;
    // };


    // function myScrollFunc(id) {
    //     debugger;

    //     x = window.scrollX++;
    //         if (x >= 100 && id == "scroll_left_toggler-d") {
    //             document.getElementById('scroll_right_toggler-d').style.display = 'none';
    //             document.getElementById('scroll_left_toggler-d').style.display = 'block';
    //         } else if(x < 100 && id == "scroll_right_togglers-d") {
    //             document.getElementById('scroll_right_toggler-d').style.display = 'block';
    //             document.getElementById('scroll_left_toggler-d').style.display = 'none';
    //         }
    // };




    // //on document load
    $(function () {

        document.getElementById('scroll_left_toggler-d').style.display = 'none';
    });




    //scroll left through botton in Images page on related categories section

    let scrollrightElm = document.getElementById("scroll_right_toggler-d");
    if (scrollrightElm != null) {
        scrollrightElm.addEventListener("click", scrolRight);

        /**
         * scroll content to left
         */
        function scrolRight() {
            var content = document.getElementById('slider_div-d');
            var step = content.scrollLeft += 850;
            document.getElementById('scroll_left_toggler-d').style.display = "block";

            if (content == 0) {
                document.getElementById('scroll_left_toggler-d').style.display = "none";
            }
        }
    }

    //scroll right through botton in Images page on related categories section

    let scrollleftElm = document.getElementById("scroll_left_toggler-d");
    if (scrollleftElm != null) {
        scrollleftElm.addEventListener("click", scrollLeft);
        /**
         * scroll content to right
         */
        function scrollLeft() {
            document.getElementById('slider_div-d').scrollLeft -= 850;
            document.getElementById('scroll_right_toggler-dd').style.display = "block";

            if (scrollLeft < 1250) {
                document.getElementById('scroll_right_toggler-dd').style.display = "none";
            }
        }
    }








    //   Side Panel for Images 
    // console.log(images);
    // Array.from(images).forEach(function (element, index) {
    //     element.addEventListener("click", myFunction);
    // });




    // Border on Click 

    var containers = document.getElementsByClassName("img_click_sidepanel-d");
    Array.from(containers).forEach(element => {
        element.addEventListener("click", addBorder);

    });

    function addBorder() {
        let elm = this;
        // console.log(elm)
        elm.getElementsByClassName("card")[0].classList.add("mystyle");
        elm.getElementsByTagName("card")[0].classList.add("mystyle");
        elm.getElementsByTagName("card")[0].classList.add("mystyle");

    }

    // CROSS CLICK

    var hideC = document.getElementsByClassName("close_image_panel-d");
    Array.from(hideC).forEach(element => {


        element.addEventListener("click", hideColumn);
    });
    // HIDE COLUMN ON CROSS CLICK

    function hideColumn() {
        var x = document.getElementById("hidden_col-d");
        if (x.style.display === "block") {
            x.style.display = "none";
        }

        let elms = document.getElementsByClassName('img_click_sidepanel-d');

        Array.from(elms).forEach(element => {
            let collection = element.getElementsByTagName("div");
            Array.from(collection).forEach(myDiv => {
                myDiv.classList.remove('mystyle');
            });
            // element.getElementsByTagName("div").remove("mystyle");
            // element.getElementsByTagName("div").remove("mystyle");
        });
    }











    var fetch = document.getElementsByClassName("img_click_sidepanel-d");
    Array.from(fetch).forEach(element => {
        element.addEventListener("click", fetchDetails);
        element.addEventListener("click", showLink);
        element.addEventListener("click", showName);
    });

    // Show Image on click in Side Panel 

    function fetchDetails() {
        // debugger;
        let elmen = this;
        let getValue = document.getElementById('hidden_col-d');

        getValue.getElementsByTagName('img')[0].src =
            elmen.getElementsByTagName("img")[0].src;

        return getValue.getElementsByTagName('img')[0].src;

    }
    // Show Link on click in Side Panel 

    function showLink() {
        // debugger;
        let elmen = this;
        let getValue = document.getElementById('hidden_col-d');

        // var a = getValue.getElementsByTagName('a')[0].innerHTML;
        getValue.getElementsByTagName('a')[0].innerHTML =
            elmen.getElementsByTagName("a")[1].innerHTML;

        return getValue.getElementsByTagName('a')[0].innerHTML;
        // console.log(a);

    }
    // Show Text on click in Side Panel 

    function showName() {
        // debugger;
        let elmen = this;
        let getValue = document.getElementById('hidden_col-d');


        getValue.getElementsByTagName('a')[1].innerHTML =
            elmen.getElementsByTagName("a")[0].innerHTML;

        return getValue.getElementsByTagName('a')[1].innerHTML;

    }



    // Show COLUMN on click


    var column = document.getElementsByClassName("img_click_sidepanel-d");
    Array.from(column).forEach(element => {
        element.addEventListener("click", showColumn);
    });

    function showColumn() {
        var x = document.getElementById("hidden_col-d");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    }














});






