Qiita.setToken = function(token){
    Qiita._token = token;
}

Qiita.Resources.setRequester(function(method, endpoint, params){
  // WIP
});
module.exports = Qiita;
