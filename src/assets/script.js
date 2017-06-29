$(document).ready(function() {

  var lightClass = "light";
  var darkClass = "dark";
  var prismCdn = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0";
  var prismLight = "themes/prism-solarizedlight.min.css";
  var prismDark = "themes/prism-okaidia.min.css";

  var highlightCode = function() {
    try {
      Prism.highlightAll();
    } catch (error) {}
  }

  $("code:not(pre code)").each(function() {
    $(this).attr("class", "language-markup");
  }).promise().done(function() {
    highlightCode();
  });

  $("pre:has(code)").each(function() {
    var prismClass = "language-" + $(this).attr("class");
    $(this).children("code:first-child").attr("class", prismClass);
  }).promise().done(function() {
    highlightCode();
  });

  $(".toggle-theme").click(function(event) {
    event.preventDefault();
    $("body").toggleClass(lightClass).toggleClass(darkClass).hasClass(darkClass)
      ? $("#prism-css").attr("href", prismCdn + "/" + prismDark)
      : $("#prism-css").attr("href", prismCdn + "/" + prismLight);
  });

  $("#prism-css").attr("href", prismCdn + "/" + prismLight);

});
