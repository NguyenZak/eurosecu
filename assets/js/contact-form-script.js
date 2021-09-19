(function ($) {
  "use strict";
  $("#contactForm")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Vui lòng điền đầy đủ thông tin!");
      } else {
        event.preventDefault();
        submitForm();
      }
    });
  function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone_number = $("#phone_number").val();
    var msg_select = $("#msg_select").val();
    var message = $("#message").val();
    $.ajax({
      type: "POST",
      url: "assets/php/form-process.php",
      data:
        "name=" +
        name +
        "&email=" +
        email +
        "&msg_select=" +
        msg_select +
        "&phone_number=" +
        phone_number +
        "&message=" +
        message,
      success: function (text) {
        if (text == "success") {
          formSuccess();
        } else {
          formError();
          submitMSG(false, text);
        }
      },
    });
  }
  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
  }
  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }
  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h4 tada animated text-success";
    } else {
      var msgClasses = "h4 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
})(jQuery);
