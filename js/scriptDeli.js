
//Show and hide coupon code form
window.onload = function() {

    document.getElementById('coupon-code-input').style.display = "none";

  };
function coupon() {
    
    let couponCode = document.getElementById("coupon-code-input");
    if (couponCode.style.display === "none") {
      couponCode.style.display = "block";
    } else {
        couponCode.style.display = "none";
    }
  };