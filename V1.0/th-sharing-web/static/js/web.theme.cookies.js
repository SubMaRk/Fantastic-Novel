function WebThemeSwitch() {
  var csswitch, i, x, y, cookie_arr = document.cookie.split(";");
  for (i = 0; i < cookie_arr.length; i++) {
    x = cookie_arr[i].substr(0, cookie_arr[i].indexOf("="));
    y = cookie_arr[i].substr(cookie_arr[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == "themeswitch") {
      csswitch = unescape(y);
    }
  }

  if (csswitch != undefined) {
    return csswitch;
  } else {
    return "default";
  }
}

function switchQuery(mySheet) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + 365);
  var c_value = escape(mySheet) + ((365 == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = "themeswitch" + "=" + c_value + ";domain=novel.th-sharing.com;path=/";
  document.location.reload(true);
}
