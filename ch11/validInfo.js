function validInfo() {
  var form = document.forms.userinfo;
  return form.name.value.length > 0 && (/^\S+@\S+$/).test(form.email.value);
}

function setupForm() {
  document.forms.userinfo.send.onClick = function() {
    if (validInfo()) {
      document.forms.userinfo.submit();
    } else {
      alert("FAIL");
    }
  };
}
