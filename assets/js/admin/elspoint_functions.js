function elsp_pageRefresh(){
    location.reload()
}

//Jqury function
function elsp_alertModal(alertStyle=true,msg="alert Modal") {
    console.log("status : "+alertStyle);
    var myModal = new bootstrap.Modal(document.getElementById("alertModal"), {});
    $("#alertModal_content").text(msg);
    var hasSuccess= $("#alertModal_content").hasClass("alert-success");
    var hasDanger=  $("#alertModal_content").hasClass("alert-danger");
    console.log(hasSuccess+"danger: "+hasDanger);
    if(hasSuccess){
      $("#alertModal_content").removeClass("alert-success")
    }
    if(hasDanger){
      $("#alertModal_content").removeClass("alert-danger")
    }
    if(alertStyle){
      $("#alertModal_content").addClass("alert-success")
    }else{
      $("#alertModal_content").addClass("alert-danger")
    }
    myModal.show();
    setInterval(() => {
      myModal.hide();
    }, 2000);

}