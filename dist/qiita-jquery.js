Qiita.setToken = function(token){
    Qiita._token = token;
}

Qiita.Resources.request = function(method, endpoint, params){
  if(!Qiita._token) throw 'you should set token by Qiita.setToken(<your token>)';
  return jQuery.ajax(endpoint, {
    method: method,
    data: params,
    beforeSend: function(xhr){
      xhr.setRequestHeader("Authorization", 'Bearer '+Qiita._token);
    }
  });
}
