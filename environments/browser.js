Qiita.setToken = function(token){
    Qiita._token = token;
}

Qiita.Resources.setRequester(function(method, endpoint, params){
  if(!Qiita._token) throw 'you should set token by Qiita.setToken(<your token>)';
  if(jQuery) {
    var dfd = jQuery.ajax(endpoint, {
      method: method,
      data: params,
      beforeSend: function(xhr){
        xhr.setRequestHeader("Authorization", 'Bearer '+Qiita._token);
      }
    });
    return {
      then: function(f){
        dfd.done(f)
      }
    };
  } else {
     throw 'TODO: implement without jquery'
  }
});
