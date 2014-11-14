declare module Qiita {
    module Entities {
    }
    interface Thenable<T> {
        then: (t: T) => any;
    }
    function setRequester(f: any): void;
    module Resources {
        class AccessToken {
            static create_access_token(params: {
                client_id: string;
                client_secret: string;
                code: string;
            }): Thenable<any>;
            static delete_access_token(id: string, params?: {}): Thenable<any>;
        }
        class Comment {
            static get_comment(id: string, params?: {}): Thenable<any>;
            static delete_comment(id: string, params?: {}): Thenable<any>;
            static update_comment(id: string, params: {
                body: string;
            }): Thenable<any>;
            static list_item_comments(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static create_item_comment(id: string, params: {
                body: string;
            }): Thenable<any>;
            static thank_comment(id: string, params?: {}): Thenable<any>;
            static unthank_comment(id: string, params?: {}): Thenable<any>;
        }
        class Item {
            static list_items(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static create_item(params: {
                body: string;
                coediting: boolean;
                gist: boolean;
                private: boolean;
                tags: any[];
                title: string;
                tweet: boolean;
            }): Thenable<any>;
            static get_item(id: string, params?: {}): Thenable<any>;
            static update_item(id: string, params: {
                body: string;
                coediting: boolean;
                private: boolean;
                tags: any[];
                title: string;
            }): Thenable<any>;
            static delete_item(id: string, params?: {}): Thenable<any>;
            static list_tag_items(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_user_items(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_user_stocks(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static stock_item(id: string, params?: {}): Thenable<any>;
            static unstock_item(id: string, params?: {}): Thenable<any>;
            static lgtm_item(id: string, params?: {}): Thenable<any>;
            static unlgtm_item(id: string, params?: {}): Thenable<any>;
        }
        class Project {
            static list_projects(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static get_project(id: string, params?: {}): Thenable<any>;
            static create_project(params: {
                archived: boolean;
                body: string;
                tags: any[];
                name: string;
            }): Thenable<any>;
            static delete_project(id: string, params?: {}): Thenable<any>;
            static update_project(id: string, params: {
                archived: boolean;
                body: string;
                tags: any[];
                name: string;
            }): Thenable<any>;
        }
        class ExpandedTemplate {
            static create_expanded_template(params: {
                body: string;
                tags: any[];
                title: string;
            }): Thenable<any>;
        }
        class Tag {
            static list_tags(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static get_tag(id: string, params?: {}): Thenable<any>;
            static list_user_following_tags(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
        }
        class Template {
            static list_templates(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static get_template(id: string, params?: {}): Thenable<any>;
            static delete_template(id: string, params?: {}): Thenable<any>;
            static create_template(params: {
                body: string;
                name: string;
                tags: any[];
                title: string;
            }): Thenable<any>;
            static update_template(id: string, params: {
                body: string;
                name: string;
                tags: any[];
                title: string;
            }): Thenable<any>;
        }
        class User {
            static list_users(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static get_user(id: string, params?: {}): Thenable<any>;
            static get_authenticated_user(params?: {}): Thenable<any>;
            static list_user_followees(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_user_followers(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_item_stockers(id: string, params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
        }
    }
}
