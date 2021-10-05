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

    // //on document load
    $(function() {
    
        document.getElementById('scroll_left_toggler-d').style.display = 'none';
    });

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




      //scroll left through botton in Images page on related categories section
    
      let scrollrightElm =document.getElementById("scroll_right_toggler-d");
      if(scrollrightElm != null){
          scrollrightElm.addEventListener("click" , scrolRight);
  
          /**
           * scroll content to left
           */
          function scrolRight() {
              var content = document.getElementById('slider_div-d');
              var step = content.scrollLeft += 1250;
              document.getElementById('scroll_left_toggler-d').style.display = "block";  
          }
      }
      
      //scroll right through botton in Images page on related categories section
  
      let scrollleftElm = document.getElementById("scroll_left_toggler-d");
      if(scrollleftElm != null){
          scrollleftElm.addEventListener("click" , scrollLeft);
          /**
           * scroll content to right
           */
          function scrollLeft() {
              document.getElementById('slider_div-d').scrollLeft -= 1250;
              document.getElementById('scroll_right_toggler-dd').style.display = "block";
          }
      }





