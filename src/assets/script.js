$( document ).ready(function() {

  $("pre:has(code)").each(function() {

    var prismClass = "language-" + $(this).attr("class");
    $(this).children("code:first-child").attr("class", prismClass);

  }).promise().done(function() {

    try {
      Prism.highlightAll();
    } catch (error) {
      console.error(error);
    }

  });
  
});
