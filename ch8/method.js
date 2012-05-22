function method(obj, name) {
  return function(){
    return obj[name].apply(obj, arguments);
  };
}
