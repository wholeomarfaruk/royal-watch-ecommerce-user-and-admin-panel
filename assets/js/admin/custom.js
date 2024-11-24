

$('body').off('submit', '#register_student').on('submit', '#register_student', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#register_student').serializeArray();
    // console.log(data)

    var formdata = $("#register_student").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/student-register-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        

        if (response.request) {
           
          if (response.status) {
        
           
            console.log(response);
            elsp_alertModal(response.status,response.message)
            elsp_pageRefresh();
           
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
        }else{
         
          elsp_alertModal(response.status,response.message)
        }
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);

      }
    });
  });

$('body').off('submit', '#update_student').on('submit', '#update_student', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#update_student').serializeArray();
    // console.log(data)

    var formdata = $("#update_student").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/student-update-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
        if (response.request) {
           
          if (response.status) {
        
           
            myModal.hide();
            elsp_alertModal(response.status,response.message)
            elsp_pageRefresh();
           
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
        }else{
         
          elsp_alertModal(response.status,response.message)
        }
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);

      }
    });
  });

$('body').off('submit', '#task_assign_form').on('submit', '#task_assign_form', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 
console.log($(this).find("input[type=file]")[0].files);

    $formData = new FormData();
    for (let index = 0; index < $(this).find("input[type=file]")[0].files.length; index++) {
      $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[index]);

      
    }
    // $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files);
    

    var data = $('#task_assign_form').serializeArray();
    // console.log(data)

    var formdata = $("#task_assign_form").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/task_assign-server.php',
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
  });

$('body').off('submit', '#signinform').on('submit', '#signinform', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    // $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#signinform').serializeArray();
    // console.log(data)

    var formdata = $("#signinform").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });

console.log(formdata);

    $.ajax({
      type: 'POST',
      url: 'server/admin_login-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
       
         
          if (response.status==true) {
        
           
           
            elsp_alertModal(response.status,response.message)
           
            elsp_pageRefresh();
              
          }else{
            console.log("dandger");
            elsp_alertModal(response.status,response.message)
          }
      
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);

      }
    });
  });

  function task_create_modal_open(st_id) {
    if(st_id !=null){
    
      $("#task_modal_st_id").val(st_id);
      $('#task_create_modal').modal('show');
    
    }
  }
  
  function updateTaskCheck(task_id){
    if(task_id!="" && task_id!=null){

      $.ajax({
        type: 'GET',
        url: 'server/task-updateTaskCheck.php?task_id='+task_id,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
          // Handle successful response
          console.log(response.status);
          if (response.request) {
           
            if (response.status==true) {
          
             
              myModal.hide();
              elsp_alertModal(response.status,response.message)
              elsp_pageRefresh();
             
            }else{
             
              elsp_alertModal(response.status,response.message)
            }
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
          
        },
        error: function (xhr, status, error) {
          // Handle errors
         
          console.error('Error:', error);
  
        }
      });
    }
  }
  function updateSt_Status(st_id){
    console.log("id"+st_id)
    if(st_id!="" && st_id!=null){

      $.ajax({
        type: 'GET',
        url: 'server/student-update-status-server.php?st_id='+st_id,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
          // Handle successful response
          console.log(response.status);
          if (response.request) {
           
            if (response.status==true) {
          
             
         
              elsp_alertModal(response.status,response.message)
              elsp_pageRefresh();
             
            }else{
             
              elsp_alertModal(response.status,response.message)
            }
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
          
        },
        error: function (xhr, status, error) {
          // Handle errors
         
          console.error('Error:', error);
  
        }
      });
    }
  }
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  $('body').off('submit', '#update_student_secure_data').on('submit', '#update_student_secure_data', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    // $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#update_student_secure_data').serializeArray();
    // console.log(data)

    var formdata = $("#update_student_secure_data").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/update-student-security-info-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
        if (response.request) {
           
          if (response.status) {
        
    
            elsp_alertModal(response.status,response.message)
            // elsp_pageRefresh();
           
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
        }else{
         
          elsp_alertModal(response.status,response.message)
        }
        
      },
      error: function (xhr, status, error) {
        // Handle errors
        elsp_alertModal(false,error)
        console.error('Error:', error);

      }
    });
  });


  $('body').off('submit', '#update_admin_secure_data').on('submit', '#update_admin_secure_data', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    // $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#update_admin_secure_data').serializeArray();
    // console.log(data)

    var formdata = $("#update_admin_secure_data").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/update-admin-security-info-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
        if (response.request) {
           
          if (response.status) {
        
    
            elsp_alertModal(response.status,response.message)
            // elsp_pageRefresh();
           
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
        }else{
         
          elsp_alertModal(response.status,response.message)
        }
        
      },
      error: function (xhr, status, error) {
        // Handle errors
        elsp_alertModal(false,error)
        console.error('Error:', error);

      }
    });
  });


  function attachmentView(task_id,attachment_col){
    console.log("id:"+task_id)
    console.log("attachment_col:"+attachment_col)
    if(task_id!="" && task_id!=null){

      $.ajax({
        type: 'GET',
        url: 'server/attachment_slider-server.php?task_id='+task_id+'&attachment_col='+attachment_col,
        processData: false,
        contentType: false,
        dataType: 'html',
        success: function (response) {
          // Handle successful response
            $('#attachment_content').html(response);
          console.log($('#attachment_view').modal('show'))
        },
        error: function (xhr, status, error) {
          // Handle errors
         
          console.error('Error:', error);
  
        }
      });
    }
  }

  function edit_task_modal(task_id){
    console.log("id:"+task_id)

    if(task_id!="" && task_id!=null){

      $.ajax({
        type: 'GET',
        url: 'server/edit_task_modal_data-server.php?task_id='+task_id,
        processData: false,
        contentType: false,
        dataType: 'html',
        success: function (response) {
          // Handle successful response
            $('#edit_task_modal_content').html(response);
          console.log($('#edit_task_modal').modal('show'))
        },
        error: function (xhr, status, error) {
          // Handle errors
         
          console.error('Error:', error);
  
        }
      });
    }
  }
  $('body').off('submit', '#edit_task_modal_form').on('submit', '#edit_task_modal_form', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 
console.log($(this).find("input[type=file]").eq(1).attr('name'));

    $formData = new FormData();
    // $(this).find("input[type=file]").forEach(element => {
    //   console.log(element)
    // });
    for (let index = 0; index < $(this).find("input[type=file]").length; index++) {
      for (let i = 0; i < $(this).find("input[type=file]")[index].files.length; i++) {

        $formData.append($(this).find("input[type=file]").eq(index).attr('name'), $(this).find("input[type=file]")[index].files[i]);
      }

     
    }
    // $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files);
    

    var data = $('#edit_task_modal_form').serializeArray();
    // console.log(data)

    var formdata = $("#edit_task_modal_form").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/task_update-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
        if (response.request) {
         
          if (response.status) {
        
           
          $('#edit_task_modal').modal('hide');
          elsp_alertModal(response.status,response.message)
            // elsp_pageRefresh();
           
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
  });

  $('body').off('submit', '#update_admin_profile').on('submit', '#update_admin_profile', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#update_admin_profile').serializeArray();
    // console.log(data)

    var formdata = $("#update_admin_profile").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'server/admin-update-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
        console.log(response.status);
        if (response.request) {
           
          if (response.status) {
        
           
           
            elsp_alertModal(response.status,response.message)
            elsp_pageRefresh();
           
          }else{
           
            elsp_alertModal(response.status,response.message)
          }
        }else{
         
          elsp_alertModal(response.status,response.message)
        }
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);

      }
    });
  });

  $('body').off('submit', '#forgot_password_form').on('submit', '#forgot_password_form', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    // $formData.append($(this).find("input[type=file]").attr("name"), $(this).find("input[type=file]")[0].files[0]);
    

    var data = $('#forgot_password_form').serializeArray();
    // console.log(data)

    var formdata = $("#forgot_password_form").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });

console.log(formdata);

    $.ajax({
      type: 'POST',
      url: 'server/admin-forgot-password-server.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (response) {
        // Handle successful response
         
          if (response.status==true) {
        
            elsp_alertModal(response.status,response.message)
          
          }else{
        
            elsp_alertModal(response.status,response.message)
          }
      
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);

      }
    });
  });

  function task_create_modal_open(st_id) {
    if(st_id !=null){
    
      $("#task_modal_st_id").val(st_id);
      $('#task_create_modal').modal('show');
    
    }
  }
  