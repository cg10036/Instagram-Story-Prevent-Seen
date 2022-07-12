var _XMLHttpRequest = XMLHttpRequest;
XMLHttpRequest = function () {
  var xhr = new _XMLHttpRequest();
  var _open = xhr.open;
  xhr.open = function () {
    let [method, url] = arguments;
    if (url.includes("stories") && url.includes("seen")) {
      throw Error("Block!");
    }
    return _open.apply(this, arguments);
  };
  return xhr;
};
