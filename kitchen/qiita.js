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
            AccessToken.delete_access_token = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/access_tokens/:access_token', params);
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
            return AuthenticatedUser;
        }());
        Resources.AuthenticatedUser = AuthenticatedUser;
        var Comment = (function () {
            function Comment() {
            }
            Comment.delete_comment = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/comments/:comment_id', params);
            };
            Comment.get_comment = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/comments/:comment_id', params);
            };
            Comment.update_comment = function (params) {
                return request('PATCH', '/api/v2/comments/:comment_id', params);
            };
            Comment.unthank_comment = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/comments/:comment_id/thank', params);
            };
            Comment.thank_comment = function (params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/comments/:comment_id/thank', params);
            };
            Comment.list_item_comments = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/:item_id/comments', params);
            };
            Comment.create_item_comment = function (params) {
                return request('POST', '/api/v2/items/:item_id/comments', params);
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
            Item.delete_item = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/:item_id', params);
            };
            Item.get_item = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/:item_id', params);
            };
            Item.update_item = function (params) {
                return request('PATCH', '/api/v2/items/:item_id', params);
            };
            Item.unlike_item = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/:item_id/like', params);
            };
            Item.like_item = function (params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/items/:item_id/like', params);
            };
            Item.unstock_item = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/:item_id/stock', params);
            };
            Item.get_item_stock = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/:item_id/stock', params);
            };
            Item.get_item_like = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/:item_id/like', params);
            };
            Item.stock_item = function (params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/items/:item_id/stock', params);
            };
            Item.list_tag_items = function (params) {
                return request('GET', '/api/v2/tags/:tag_id/items', params);
            };
            Item.list_user_items = function (params) {
                return request('GET', '/api/v2/users/:user_id/items', params);
            };
            Item.list_user_stocks = function (params) {
                return request('GET', '/api/v2/users/:user_id/stocks', params);
            };
            return Item;
        }());
        Resources.Item = Item;
        var Like = (function () {
            function Like() {
            }
            Like.list_item_likes = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/items/:item_id/likes', params);
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
            Project.delete_project = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/projects/:project_id', params);
            };
            Project.get_project = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/projects/:project_id', params);
            };
            Project.patch_project = function (params) {
                return request('PATCH', '/api/v2/projects/:project_id', params);
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
            Tag.get_tag = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/tags/:tag_id', params);
            };
            Tag.list_user_following_tags = function (params) {
                return request('GET', '/api/v2/users/:user_id/following_tags', params);
            };
            Tag.unfollow_tag = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/tags/:tag_id/following', params);
            };
            Tag.get_tag_following = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/tags/:tag_id/following', params);
            };
            Tag.follow_tag = function (params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/tags/:tag_id/following', params);
            };
            return Tag;
        }());
        Resources.Tag = Tag;
        var Tagging = (function () {
            function Tagging() {
            }
            Tagging.create_tagging = function (params) {
                return request('POST', '/api/v2/items/:item_id/taggings', params);
            };
            Tagging.delete_tagging = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/items/:item_id/taggings/:tagging_id', params);
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
            Template.delete_template = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/templates/:template_id', params);
            };
            Template.get_template = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/templates/:template_id', params);
            };
            Template.create_template = function (params) {
                return request('POST', '/api/v2/templates', params);
            };
            Template.update_template = function (params) {
                return request('PATCH', '/api/v2/templates/:template_id', params);
            };
            return Template;
        }());
        Resources.Template = Template;
        var User = (function () {
            function User() {
            }
            User.list_item_stockers = function (params) {
                return request('GET', '/api/v2/items/:item_id/stockers', params);
            };
            User.list_users = function (params) {
                return request('GET', '/api/v2/users', params);
            };
            User.get_user = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/users/:user_id', params);
            };
            User.list_user_followees = function (params) {
                return request('GET', '/api/v2/users/:user_id/followees', params);
            };
            User.list_user_followers = function (params) {
                return request('GET', '/api/v2/users/:user_id/followers', params);
            };
            User.unfollow_user = function (params) {
                if (params === void 0) { params = {}; }
                return request('DELETE', '/api/v2/users/:user_id/following', params);
            };
            User.get_user_following = function (params) {
                if (params === void 0) { params = {}; }
                return request('GET', '/api/v2/users/:user_id/following', params);
            };
            User.follow_user = function (params) {
                if (params === void 0) { params = {}; }
                return request('PUT', '/api/v2/users/:user_id/following', params);
            };
            return User;
        }());
        Resources.User = User;
    })(Resources = Qiita.Resources || (Qiita.Resources = {}));
})(Qiita || (Qiita = {}));
