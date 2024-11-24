    // Check if the 'size' cookie is already set
    if (!document.cookie.split('; ').find(row => row.startsWith('size='))) {
      // Get the screen resolution
      const screenSize = `${window.screen.width}x${window.screen.height}`;
      
      // Convert screen resolution to Base64
      const base64ScreenSize = btoa(screenSize);
      
      // Set the 'size' cookie with Base64 encoded screen size, expiration of 1 day
      const expiryDate = new Date(Date.now() + 86400 * 1000); // 1 day in milliseconds
      document.cookie = `size=${base64ScreenSize}; path=/; expires=${expiryDate.toUTCString()}`;
      
      // Reload the page after setting the cookie
      location.reload();
  }

  
$(document).ready(function () {
  // Placeholder for custom jQuery functionality
  console.log("App Loaded");

  // Magic Navigation bar
  const list = document.querySelectorAll(".list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  // console.log("carousel: " + $(".owl-carousel").attr("class"));

  if ($(".mymarketcarousel").length > 0) {
    console.log("inside");
    $(".mymarketcarousel").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 10,
      mouseDrag: true,
      dots: false,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  } else {
    console.log("owlcarousel undefied");
  }

  // Datatable of market page
  if ($("#market_table").length > 0) {
    $("#market_table").DataTable({
      responsive: true,
      paging: false,
      order: [[1, "desc"]],
      columnDefs: [{ width: "70%", targets: 0 }],
      oLanguage: {
        sSearch: "SEARCH YOUR COIN",
      },
    });

    $(".clickable-row").click(function () {
      window.location = $(this).data("href");
    });
  }

  // History table
  if ($("#history_table").length > 0) {
    $("#history_table").DataTable({
      responsive: true,
      bLengthChange: false,
      lengthChange: false,
      pageLength: 50,
      searching: false,
    });
  }

  if ($("#deposit_enter_box").length > 0) {
    $("#deposit_enter_box").on("keyup", function () {
      $value = parseFloat((deposit_enter_box = $("#deposit_enter_box").val()));
      $("#deposit_amount").val($value + $value * 0.03);
    });
  }

  if ($("#withdrawal_enter_box").length > 0) {
    $("#withdrawal_enter_box").on("keyup", function () {
      $value = parseFloat(
        (withdrawal_enter_box = $("#withdrawal_enter_box").val())
      );
      $("#withdrawal_amount").val($value - $value * 0.03);
    });
  }

  if ($("#ai_mode").length > 0) {
    console.log("ai switch found");

   

    $("#ai_mode").on("change", function () {
      $btn=$(this);
      $.ajax({
        type: 'GET',
        url: 'user/aimode-enbaled/',
        processData: false,
        contentType: false,
        dataType: 'json',
        beforeSend: function() {
          // setting a timeout
          $($btn).attr('disabled', true);
          console.log($btn);
      },
        success: function (response) {
          // Handle successful response
          console.log(response);
          // server request status 
          if(response.status){
            // Ai mode status 
            if(response.aimode){
              if ($($btn).is(":checked")) {
                $(".wallet_area").addClass("locked");
              } else if ($(".wallet_area").hasClass("locked")) {
                $(".wallet_area").removeClass("locked");
              }

            }else{
              if ($($btn).is(":checked")) {
                $(".wallet_area").addClass("locked");
              } else if ($(".wallet_area").hasClass("locked")) {
                $(".wallet_area").removeClass("locked");
              }

            }

          }else{
            if ($($btn).is(":checked")) {
              $($btn).prop('checked', false);
            } else {
              $($btn).prop('checked', true);
            }
            $($btn).attr('disabled', false);
           

          }



          
        },
        error: function (xhr, status, error) {
          // Handle errors
         
          console.error('Error:', error);
    
        }
      });




      console.log($(this).is(":checked"));
    });


  } else {
    console.log("ai switch not found");
  }

  if ($(".mynewscarousel").length > 0) {
    $(".mynewscarousel").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 10,
      mouseDrag: true,
      dots: true,
      autoplayTimeout: 4000,
      items:1,
 
     
    });
  }

  function aimodeChanger() {
    $.ajax({
      type: 'GET',
      url: 'user/aimode-enbaled/',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
        if (response.request) {
         
          if (response.status) {
        
           
          $('#task_create_modal').modal('hide');
          elsp_alertModal(response.status,response.message)
            elsp_pageRefresh();
           
          }else{
            console.log("dandger");
            elsp_alertModal(response.status,response.message)
          }
        }else{
          console.log("danger");
          elsp_alertModal(response.status,response.message)
        }
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);
  
      }
    });
  }

});
