module Qiita {
  export module Entities {

    export interface AccessToken {
      client_id: string;
      scopes: string[];
      token: string;
    }

    export interface AuthenticatedUser {
      description?: string;
      facebook_id?: string;
      followees_count: number;
      followers_count: number;
      github_login_name?: string;
      id: string;
      items_count: number;
      linkedin_id?: string;
      location?: string;
      name?: string;
      organization?: string;
      permanent_id: number;
      profile_image_url: string;
      twitter_screen_name?: string;
      website_url?: string;
      image_monthly_upload_limit: number;
      image_monthly_upload_remaining: number;
      team_only: boolean;
    }

    export interface Comment {
      body: string;
      created_at: string;
      id: string;
      rendered_body: string;
      updated_at: string;
      user: {description?: string; facebook_id?: string; followees_count: number; followers_count: number; github_login_name?: string; id: string; items_count: number; linkedin_id?: string; location?: string; name?: string; organization?: string; permanent_id: number; profile_image_url: string; twitter_screen_name?: string; website_url?: string};
    }

    export interface ExpandedTemplate {
      expanded_body: string;
      expanded_tags: any[];
      expanded_title: string;
    }

    export interface Item {
      rendered_body: string;
      body: string;
      coediting: boolean;
      created_at: string;
      group: {created_at: string; id: number; name: string; private: boolean; updated_at: string; url_name: string};
      id: string;
      private: boolean;
      tags: any[];
      title: string;
      updated_at: string;
      url: string;
      user: {description?: string; facebook_id?: string; followees_count: number; followers_count: number; github_login_name?: string; id: string; items_count: number; linkedin_id?: string; location?: string; name?: string; organization?: string; permanent_id: number; profile_image_url: string; twitter_screen_name?: string; website_url?: string};
    }

    export interface Like {
      created_at: string;
      user: {description?: string; facebook_id?: string; followees_count: number; followers_count: number; github_login_name?: string; id: string; items_count: number; linkedin_id?: string; location?: string; name?: string; organization?: string; permanent_id: number; profile_image_url: string; twitter_screen_name?: string; website_url?: string};
    }

    export interface Project {
      rendered_body: string;
      archived: boolean;
      body: string;
      created_at: string;
      id: number;
      name: string;
      updated_at: string;
    }

    export interface Tag {
      followers_count: number;
      icon_url?: string;
      id: string;
      items_count: number;
    }

    export interface Tagging {
      name: string;
      versions: string[];
    }

    export interface Team {
      active: boolean;
      id: string;
      name: string;
    }

    export interface Template {
      body: string;
      id: number;
      name: string;
      expanded_body: string;
      expanded_tags: any[];
      expanded_title: string;
      tags: any[];
      title: string;
    }

    export interface User {
      description?: string;
      facebook_id?: string;
      followees_count: number;
      followers_count: number;
      github_login_name?: string;
      id: string;
      items_count: number;
      linkedin_id?: string;
      location?: string;
      name?: string;
      organization?: string;
      permanent_id: number;
      profile_image_url: string;
      twitter_screen_name?: string;
      website_url?: string;
    }

  }

  export interface Thenable<T> {
    then: (t: T) => any;
  }

  var request: <T>(method: string, href: string, params: Object) => Thenable<T>;

  export function setRequester(f) {
    request = f;
  }

  export module Resources {

    export class AccessToken {

      public static create_access_token(
        params: { client_id: string; client_secret: string; code: string;  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/access_tokens' ,
          params
        );
      }

      public static delete_access_token(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/access_tokens/:access_token' ,
          params
        );
      }
    }

    export class AuthenticatedUser {

      public static get_authenticated_user(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/authenticated_user' ,
          params
        );
      }
    }

    export class Comment {

      public static delete_comment(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/comments/:comment_id' ,
          params
        );
      }

      public static get_comment(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/comments/:comment_id' ,
          params
        );
      }

      public static update_comment(
        params: { body: string;  }
      ): Thenable<any> {
        return request(
          'PATCH',
           '/api/v2/comments/:comment_id' ,
          params
        );
      }

      public static unthank_comment(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/comments/:comment_id/thank' ,
          params
        );
      }

      public static thank_comment(
        params = {}
      ): Thenable<any> {
        return request(
          'PUT',
           '/api/v2/comments/:comment_id/thank' ,
          params
        );
      }

      public static list_item_comments(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items/:item_id/comments' ,
          params
        );
      }

      public static create_item_comment(
        params: { body: string;  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/items/:item_id/comments' ,
          params
        );
      }
    }

    export class ExpandedTemplate {

      public static create_expanded_template(
        params: { body: string; tags: any[]; title: string;  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/expanded_templates' ,
          params
        );
      }
    }

    export class Item {

      public static list_authenticated_user_items(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/authenticated_user/items' ,
          params
        );
      }

      public static list_items(
        params: { page: string; per_page: string; query: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items' ,
          params
        );
      }

      public static create_item(
        params: { body: string; coediting: boolean; gist: boolean; private: boolean; tags: any[]; title: string; tweet: boolean;  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/items' ,
          params
        );
      }

      public static delete_item(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/items/:item_id' ,
          params
        );
      }

      public static get_item(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items/:item_id' ,
          params
        );
      }

      public static update_item(
        params: { body: string; coediting: boolean; private: boolean; tags: any[]; title: string;  }
      ): Thenable<any> {
        return request(
          'PATCH',
           '/api/v2/items/:item_id' ,
          params
        );
      }

      public static unlike_item(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/items/:item_id/like' ,
          params
        );
      }

      public static like_item(
        params = {}
      ): Thenable<any> {
        return request(
          'PUT',
           '/api/v2/items/:item_id/like' ,
          params
        );
      }

      public static unstock_item(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/items/:item_id/stock' ,
          params
        );
      }

      public static get_item_stock(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items/:item_id/stock' ,
          params
        );
      }

      public static get_item_like(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items/:item_id/like' ,
          params
        );
      }

      public static stock_item(
        params = {}
      ): Thenable<any> {
        return request(
          'PUT',
           '/api/v2/items/:item_id/stock' ,
          params
        );
      }

      public static list_tag_items(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/tags/:tag_id/items' ,
          params
        );
      }

      public static list_user_items(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id/items' ,
          params
        );
      }

      public static list_user_stocks(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id/stocks' ,
          params
        );
      }
    }

    export class Like {

      public static list_item_likes(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items/:item_id/likes' ,
          params
        );
      }
    }

    export class Project {

      public static list_projects(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/projects' ,
          params
        );
      }

      public static create_project(
        params: { archived: boolean; body: string; name: string; tags: any[];  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/projects' ,
          params
        );
      }

      public static delete_project(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/projects/:project_id' ,
          params
        );
      }

      public static get_project(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/projects/:project_id' ,
          params
        );
      }

      public static patch_project(
        params: { archived: boolean; body: string; name: string; tags: any[];  }
      ): Thenable<any> {
        return request(
          'PATCH',
           '/api/v2/projects/:project_id' ,
          params
        );
      }
    }

    export class Tag {

      public static list_tags(
        params: { page: string; per_page: string; sort: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/tags' ,
          params
        );
      }

      public static get_tag(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/tags/:tag_id' ,
          params
        );
      }

      public static list_user_following_tags(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id/following_tags' ,
          params
        );
      }

      public static unfollow_tag(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/tags/:tag_id/following' ,
          params
        );
      }

      public static get_tag_following(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/tags/:tag_id/following' ,
          params
        );
      }

      public static follow_tag(
        params = {}
      ): Thenable<any> {
        return request(
          'PUT',
           '/api/v2/tags/:tag_id/following' ,
          params
        );
      }
    }

    export class Tagging {

      public static create_tagging(
        params: { name: string; versions: string[];  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/items/:item_id/taggings' ,
          params
        );
      }

      public static delete_tagging(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/items/:item_id/taggings/:tagging_id' ,
          params
        );
      }
    }

    export class Team {

      public static list_teams(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/teams' ,
          params
        );
      }
    }

    export class Template {

      public static list_templates(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/templates' ,
          params
        );
      }

      public static delete_template(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/templates/:template_id' ,
          params
        );
      }

      public static get_template(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/templates/:template_id' ,
          params
        );
      }

      public static create_template(
        params: { body: string; name: string; tags: any[]; title: string;  }
      ): Thenable<any> {
        return request(
          'POST',
           '/api/v2/templates' ,
          params
        );
      }

      public static update_template(
        params: { body: string; name: string; tags: any[]; title: string;  }
      ): Thenable<any> {
        return request(
          'PATCH',
           '/api/v2/templates/:template_id' ,
          params
        );
      }
    }

    export class User {

      public static list_item_stockers(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/items/:item_id/stockers' ,
          params
        );
      }

      public static list_users(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users' ,
          params
        );
      }

      public static get_user(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id' ,
          params
        );
      }

      public static list_user_followees(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id/followees' ,
          params
        );
      }

      public static list_user_followers(
        params: { page: string; per_page: string;  }
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id/followers' ,
          params
        );
      }

      public static unfollow_user(
        params = {}
      ): Thenable<any> {
        return request(
          'DELETE',
           '/api/v2/users/:user_id/following' ,
          params
        );
      }

      public static get_user_following(
        params = {}
      ): Thenable<any> {
        return request(
          'GET',
           '/api/v2/users/:user_id/following' ,
          params
        );
      }

      public static follow_user(
        params = {}
      ): Thenable<any> {
        return request(
          'PUT',
           '/api/v2/users/:user_id/following' ,
          params
        );
      }
    }

  }

}
