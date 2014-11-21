Qiita.setToken = function(token){
    Qiita._token = token;
}

Qiita.setEndpoint = function(endpoint){
    Qiita._endpoint = endpoint;
}

Qiita._endpoint = 'https://qiita.com';

Qiita.setRequester(function(method, endpoint, params){
  if(!Qiita._token) throw 'you should set token by Qiita.setToken(<your token>)';

  if(jQuery) {
    if(method !== 'GET') params = JSON.stringify(params);

    var dfd = jQuery.ajax(Qiita._endpoint+endpoint, {
      method: method,
      data: params,
      contentType: 'application/json',
      dataType: "json",
      beforeSend: function(xhr){
        xhr.setRequestHeader("Authorization", 'Bearer '+Qiita._token);
      }
    });
    return {
      then: function(f){
        return dfd.done(f)
      }
    };
  } else {
     throw 'TODO: implement without jquery'
  }
});

if(typeof module === 'object' && typeof require === 'function'){
    module.exports = Qiita;
} else {
    window.Qitia = Qiita;
}
