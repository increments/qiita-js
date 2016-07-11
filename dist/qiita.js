(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Qiita = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Qiita;
(function (Qiita) {
    var request;
    function setRequester(f) {
        request = f;
    }
    Qiita.setRequester = setRequester;
    var Resources;
    (function (Resources) {
        var AccessToken = (function () {
            function AccessToken() {
            }
            AccessToken.create_access_token = function (params) {
                return request('POST', '/api/v2/access_tokens', params);
            };
            AccessToken.delete_access_token = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/access_tokens/' + id + '/', params);
            };
            return AccessToken;
        }());
        Resources.AccessToken = AccessToken;
        var AuthenticatedUser = (function () {
            function AuthenticatedUser() {
            }
            AuthenticatedUser.get_authenticated_user = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/authenticated_user', params);
            };
            AuthenticatedUser.groups = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/authenticated_user/groups', params);
            };
            return AuthenticatedUser;
        }());
        Resources.AuthenticatedUser = AuthenticatedUser;
        var Comment = (function () {
            function Comment() {
            }
            Comment.delete_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/comments/' + id + '/', params);
            };
            Comment.get_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/comments/' + id + '/', params);
            };
            Comment.update_comment = function (id, params) {
                return request('PATCH', '/api/v2/comments/' + id + '/', params);
            };
            Comment.unthank_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/comments/' + id + '//thank', params);
            };
            Comment.thank_comment = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/comments/' + id + '//thank', params);
            };
            Comment.list_item_comments = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/' + id + '//comments', params);
            };
            Comment.create_item_comment = function (id, params) {
                return request('POST', '/api/v2/items/' + id + '//comments', params);
            };
            return Comment;
        }());
        Resources.Comment = Comment;
        var ExpandedTemplate = (function () {
            function ExpandedTemplate() {
            }
            ExpandedTemplate.create_expanded_template = function (params) {
                return request('POST', '/api/v2/expanded_templates', params);
            };
            return ExpandedTemplate;
        }());
        Resources.ExpandedTemplate = ExpandedTemplate;
        var Item = (function () {
            function Item() {
            }
            Item.list_authenticated_user_items = function (params) {
                return request('GET', '/api/v2/authenticated_user/items', params);
            };
            Item.list_items = function (params) {
                return request('GET', '/api/v2/items', params);
            };
            Item.create_item = function (params) {
                return request('POST', '/api/v2/items', params);
            };
            Item.delete_item = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/' + id + '/', params);
            };
            Item.get_item = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/' + id + '/', params);
            };
            Item.update_item = function (id, params) {
                return request('PATCH', '/api/v2/items/' + id + '/', params);
            };
            Item.unlike_item = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/' + id + '//like', params);
            };
            Item.like_item = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/items/' + id + '//like', params);
            };
            Item.unstock_item = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/' + id + '//stock', params);
            };
            Item.get_item_stock = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/' + id + '//stock', params);
            };
            Item.get_item_like = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/' + id + '//like', params);
            };
            Item.stock_item = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/items/' + id + '//stock', params);
            };
            Item.list_tag_items = function (id, params) {
                return request('GET', '/api/v2/tags/' + id + '//items', params);
            };
            Item.list_user_items = function (id, params) {
                return request('GET', '/api/v2/users/' + id + '//items', params);
            };
            Item.list_user_stocks = function (id, params) {
                return request('GET', '/api/v2/users/' + id + '//stocks', params);
            };
            return Item;
        }());
        Resources.Item = Item;
        var Like = (function () {
            function Like() {
            }
            Like.list_item_likes = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/' + id + '//likes', params);
            };
            return Like;
        }());
        Resources.Like = Like;
        var Project = (function () {
            function Project() {
            }
            Project.list_projects = function (params) {
                return request('GET', '/api/v2/projects', params);
            };
            Project.create_project = function (params) {
                return request('POST', '/api/v2/projects', params);
            };
            Project.delete_project = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/projects/' + id + '/', params);
            };
            Project.get_project = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/projects/' + id + '/', params);
            };
            Project.patch_project = function (id, params) {
                return request('PATCH', '/api/v2/projects/' + id + '/', params);
            };
            return Project;
        }());
        Resources.Project = Project;
        var Tag = (function () {
            function Tag() {
            }
            Tag.list_tags = function (params) {
                return request('GET', '/api/v2/tags', params);
            };
            Tag.get_tag = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/tags/' + id + '/', params);
            };
            Tag.list_user_following_tags = function (id, params) {
                return request('GET', '/api/v2/users/' + id + '//following_tags', params);
            };
            Tag.unfollow_tag = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/tags/' + id + '//following', params);
            };
            Tag.get_tag_following = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/tags/' + id + '//following', params);
            };
            Tag.follow_tag = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/tags/' + id + '//following', params);
            };
            return Tag;
        }());
        Resources.Tag = Tag;
        var Tagging = (function () {
            function Tagging() {
            }
            Tagging.create_tagging = function (id, params) {
                return request('POST', '/api/v2/items/' + id + '//taggings', params);
            };
            Tagging.delete_tagging = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/' + id + '/', params);
            };
            return Tagging;
        }());
        Resources.Tagging = Tagging;
        var Team = (function () {
            function Team() {
            }
            Team.list_teams = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/teams', params);
            };
            return Team;
        }());
        Resources.Team = Team;
        var Template = (function () {
            function Template() {
            }
            Template.list_templates = function (params) {
                return request('GET', '/api/v2/templates', params);
            };
            Template.delete_template = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/templates/' + id + '/', params);
            };
            Template.get_template = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/templates/' + id + '/', params);
            };
            Template.create_template = function (params) {
                return request('POST', '/api/v2/templates', params);
            };
            Template.update_template = function (id, params) {
                return request('PATCH', '/api/v2/templates/' + id + '/', params);
            };
            return Template;
        }());
        Resources.Template = Template;
        var User = (function () {
            function User() {
            }
            User.list_item_stockers = function (id, params) {
                return request('GET', '/api/v2/items/' + id + '//stockers', params);
            };
            User.list_users = function (params) {
                return request('GET', '/api/v2/users', params);
            };
            User.get_user = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/users/' + id + '/', params);
            };
            User.list_user_followees = function (id, params) {
                return request('GET', '/api/v2/users/' + id + '//followees', params);
            };
            User.list_user_followers = function (id, params) {
                return request('GET', '/api/v2/users/' + id + '//followers', params);
            };
            User.unfollow_user = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/users/' + id + '//following', params);
            };
            User.get_user_following = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/users/' + id + '//following', params);
            };
            User.follow_user = function (id, params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/users/' + id + '//following', params);
            };
            return User;
        }());
        Resources.User = User;
    })(Resources = Qiita.Resources || (Qiita.Resources = {}));
})(Qiita || (Qiita = {}));

},{}],2:[function(require,module,exports){
var Qiita;

Qiita = require('../kitchen/qiita');

Qiita.setToken = function(token) {
  return Qiita._token = token;
};

Qiita.setEndpoint = function(endpoint) {
  return Qiita._endpoint = endpoint;
};

Qiita.setRequester(function(method, api, params) {
  var _endpoint, _token, fetching, k, query, url, v;
  _token = Qiita._token, _endpoint = Qiita._endpoint;
  url = _endpoint + api;
  fetching = method === 'GET' ? (query = ((function() {
    var results;
    results = [];
    for (k in params) {
      v = params[k];
      results.push(k + '=' + v);
    }
    return results;
  })()).join('&'), fetch(url + "?" + query, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + _token,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })) : (url = _endpoint + api, fetch(url, {
    method: method,
    headers: {
      Authorization: 'Bearer ' + _token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }));
  return fetching.then(function(res) {
    var error;
    if (parseInt(res.statusCode, 10) >= 400) {
      error = new Error('qiita-js request error:' + method + ' ' + url + ' ' + JSON.stringify(params) + '' + '\n' + res.body.error);
      return Promise.reject(error);
    }
    return res.json();
  });
});

module.exports = Qiita;


},{"../kitchen/qiita":1}]},{},[2])(2)
});