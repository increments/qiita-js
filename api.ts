module Qiita.Resources {
  export function request(method: string, href: string, params: Object){
    //TODO: do something
  }

  export class AccessToken {

    public static create_access_token(params: { client_id: string; client_secret: string; code: string;  }) {
      return request('POST', '/api/v2/access_tokens', params);
    }

    public static delete_access_token(params = {}) {
      return request('DELETE', '/api/v2/access_tokens/{(#/properties/access_token/properties/token)}', params);
    }
  }

  export class Comment {

    public static get_comment(params = {}) {
      return request('GET', '/api/v2/comments/{(#/properties/comment/properties/id)}', params);
    }

    public static delete_comment(params = {}) {
      return request('DELETE', '/api/v2/comments/{(#/properties/comment/properties/id)}', params);
    }

    public static update_comment(params: { body: string;  }) {
      return request('PATCH', '/api/v2/comments/{(#/properties/comment/properties/id)}', params);
    }

    public static list_item_comments(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/items/{(#/definitions/item_id)}/comments', params);
    }

    public static create_item_comment(params: { body: string;  }) {
      return request('POST', '/api/v2/items/{(#/definitions/item_id)}/comments', params);
    }

    public static thank_comment(params = {}) {
      return request('PUT', '/api/v2/comments/{(#/definitions/comment_id)}/thank', params);
    }

    public static unthank_comment(params = {}) {
      return request('DELETE', '/api/v2/comments/{(#/definitions/comment_id)}/thank', params);
    }
  }

  export class Item {

    public static list_items(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/items', params);
    }

    public static create_item(params: { body: string; coediting: boolean; gist: boolean; private: boolean; tags: any[]; title: string; tweet: boolean;  }) {
      return request('POST', '/api/v2/items', params);
    }

    public static get_item(params = {}) {
      return request('GET', '/api/v2/items/{(#/properties/item/properties/id)}', params);
    }

    public static update_item(params: { body: string; coediting: boolean; private: boolean; tags: any[]; title: string;  }) {
      return request('PATCH', '/api/v2/items/{(#/properties/item/properties/id)}', params);
    }

    public static delete_item(params = {}) {
      return request('DELETE', '/api/v2/items/{(#/properties/item/properties/id)}', params);
    }

    public static list_tag_items(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/tags/{(#/properties/tag/properties/id)}/items', params);
    }

    public static list_user_items(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/users/{(#/definitions/user_id)}/items', params);
    }

    public static list_user_stocks(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/users/{(#/definitions/user_id)}/stocks', params);
    }

    public static stock_item(params = {}) {
      return request('PUT', '/api/v2/items/{(#/definitions/item_id)}/stock', params);
    }

    public static unstock_item(params = {}) {
      return request('DELETE', '/api/v2/items/{(#/definitions/item_id)}/stock', params);
    }

    public static lgtm_item(params = {}) {
      return request('PUT', '/api/v2/items/{(#/definitions/item_id)}/lgtm', params);
    }

    public static unlgtm_item(params = {}) {
      return request('DELETE', '/api/v2/items/{(#/definitions/item_id)}/lgtm', params);
    }
  }

  export class Project {

    public static list_projects(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/projects', params);
    }

    public static get_project(params = {}) {
      return request('GET', '/api/v2/projects/{(#/properties/project/properties/id)}', params);
    }

    public static create_project(params: { archived: boolean; body: string; tags: any[]; name: string;  }) {
      return request('POST', '/api/v2/projects', params);
    }

    public static delete_project(params = {}) {
      return request('DELETE', '/api/v2/projects/{(#/properties/project/properties/id)}', params);
    }

    public static update_project(params: { archived: boolean; body: string; tags: any[]; name: string;  }) {
      return request('PATCH', '/api/v2/projects/{(#/properties/project/properties/id)}', params);
    }
  }

  export class ExpandedTemplate {

    public static create_expanded_template(params: { body: string; tags: any[]; title: string;  }) {
      return request('POST', '/api/v2/expanded_templates', params);
    }
  }

  export class Tag {

    public static list_tags(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/tags', params);
    }

    public static get_tag(params = {}) {
      return request('GET', '/api/v2/tags/{(#/properties/tag/properties/id)}', params);
    }

    public static list_user_following_tags(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/users/{(#/definitions/user_id)}/following_tags', params);
    }
  }

  export class Template {

    public static list_templates(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/templates', params);
    }

    public static get_template(params = {}) {
      return request('GET', '/api/v2/templates/{(#/properties/template/properties/id)}', params);
    }

    public static delete_template(params = {}) {
      return request('DELETE', '/api/v2/templates/{(#/properties/template/properties/id)}', params);
    }

    public static create_template(params: { body: string; name: string; tags: any[]; title: string;  }) {
      return request('POST', '/api/v2/templates', params);
    }

    public static update_template(params: { body: string; name: string; tags: any[]; title: string;  }) {
      return request('PATCH', '/api/v2/templates/{(#/properties/template/properties/id)}', params);
    }
  }

  export class User {

    public static list_users(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/users', params);
    }

    public static get_user(params = {}) {
      return request('GET', '/api/v2/users/{(#/properties/user/properties/id)}', params);
    }

    public static get_authenticated_user(params = {}) {
      return request('GET', '/api/v2/authenticated_user', params);
    }

    public static list_user_followees(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/users/{(#/definitions/user_id)}/followees', params);
    }

    public static list_user_followers(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/users/{(#/definitions/user_id)}/followers', params);
    }

    public static list_item_stockers(params: { page: string; per_page: string;  }) {
      return request('GET', '/api/v2/items/{(#/definitions/item_id)}/stockers', params);
    }
  }

}
