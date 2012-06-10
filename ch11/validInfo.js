function validInfo() {
  var form = document.forms.userinfo;
  if (form.name.value.length > 0 && (/^\S+@\S+$/).test(form.email.value)) {
    form.send.onClick = function() { form.submit(); };
    return true;
  } else {
    form.send.onClick = function() { alert("FAIL"); };
    return false;
  }
}
