$(document).ready(function() {
  $(".editable-area p").dblclick(function() {
    $(".editable-area p").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#title").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<h1>")){
      selecHTML = selecHTML.replace("<h1>", "");
      selecHTML = selecHTML.replace("</h1>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<h1>" + selecHTML + "</h1>");
    }
  });

  $("#bold").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<b>")){
      selecHTML = selecHTML.replace("<b>", "");
      selecHTML = selecHTML.replace("</b>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<b>" + selecHTML + "</b>");
    }
  });

  $("#italic").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<i>")){
      selecHTML = selecHTML.replace("<i>", "");
      selecHTML = selecHTML.replace("</i>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<i>" + selecHTML + "</i>");
    }
  });

  $("#code").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<code>")){
      selecHTML = selecHTML.replace("<code>", "");
      selecHTML = selecHTML.replace("</code>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<code>" + selecHTML + "</code>");
    }
  });

  $("#list").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<ul>")){
      selecHTML = selecHTML.replace("<ul>", "");
      selecHTML = selecHTML.replace("</ul>", "");
      selecHTML = selecHTML.replace("<li>", "");
      selecHTML = selecHTML.replace("</li>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<ul><li>" + selecHTML + "</li></ul>");
    }
  });

  $("#underline").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<u>")){
      selecHTML = selecHTML.replace("<u>", "");
      selecHTML = selecHTML.replace("</u>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<u>" + selecHTML + "</u>");
    }
  });

  $("#quote").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<q>")){
      selecHTML = selecHTML.replace("<q>", "");
      selecHTML = selecHTML.replace("</q>", "");
      selec.html(selecHTML);
    } else {
      selec.html("<q>" + selecHTML + "</q>");
    }
  });

  $("#link").click(function() {
    var selec = $(".editable-area p.selected");
    var selecHTML = String(selec.html());
    if (selecHTML.includes("<a>")){
      selecHTML = selecHTML.replace("<a>", "");
      selecHTML = selecHTML.replace("</a>", "");
      selec.html(selecHTML);
    } else {
      var href = prompt("Enter url: (add https://)")
      selec.html("<a href='" + href + "' target='_blank'>" + selecHTML + "</a>");
    }
  });
});
