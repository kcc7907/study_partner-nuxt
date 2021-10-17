$(function () {
  $(".footerPage").load("footer.html");

  function contactNone() {
    $("#contact").hide();
    $("html").css({ overflow: "auto" });
    $("#contact form").addClass('animate')
  }

  function contactShow() {
    $("#contact").css({ display: "flex" });
    setTimeout(() => {
        $("#contact form").removeClass('animate')
    }, 100);
    $("html").css({ overflow: "hidden" });
  }

  $(".contactUs").on("click", contactShow);
  $(".contactUs_nav").on("click", contactShow);
  $("#applicationButton").on("click", contactShow);
  $("#contact .-close").on("click", contactNone);
  $("#contact .bg").on("click", contactNone);

  $("#contact button").on("click", () => {
    const errors = [];
    const values = [...$("#contact .validate")];
    values.forEach((e) => {
      if (e.value === "") errors.push(e);
    });
    if (errors.length !== 0) {
      errors.forEach((e) => {
        $(e).addClass("-error");
      });
      return;
    }
    sendMail();
  });

  function sendMail() {
    if (!emailjs) {
      alert("Something error!!");
      return;
    }
    const sid = atob("c2VydmljZV8xd292NzNr");
    const uid = atob("dXNlcl9BeU5DbWpnMlVzWTIwdkhDUzlKdVI=");
    data = {
      from_name: $("#contact #name").val(),
      reply_to: $("#contact #email").val() || "沒留信箱",
      message: $("#contact #message").val(),
      to_name: "kou",
    };
    emailjs.send(sid, "template_xq95tgt", data, uid).then(
      function () {
        contactNone();
      },
      function (error) {
        alert("Email server error");
        console.error("Email server error", error);
      }
    );
  }
});
