function validInfo() {
  var form = document.forms.userinfo;
  return form.name.value.length > 0 && (/^\S+@\S+$/).test(form.email.value);
}
