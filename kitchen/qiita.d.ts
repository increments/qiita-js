declare module Qiita {
    module Entities {
        interface AccessToken {
            client_id: string;
            scopes: string[];
            token: string;
        }
        interface AuthenticatedUser {
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
        interface Comment {
            body: string;
            created_at: string;
            id: string;
            rendered_body: string;
            updated_at: string;
            user: {
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
            };
        }
        interface ExpandedTemplate {
            expanded_body: string;
            expanded_tags: any[];
            expanded_title: string;
        }
        interface Item {
            rendered_body: string;
            body: string;
            coediting: boolean;
            created_at: string;
            group: {
                created_at: string;
                id: number;
                name: string;
                private: boolean;
                updated_at: string;
                url_name: string;
            };
            id: string;
            private: boolean;
            tags: any[];
            title: string;
            updated_at: string;
            url: string;
            user: {
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
            };
        }
        interface Like {
            created_at: string;
            user: {
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
            };
        }
        interface Project {
            rendered_body: string;
            archived: boolean;
            body: string;
            created_at: string;
            id: number;
            name: string;
            updated_at: string;
        }
        interface Tag {
            followers_count: number;
            icon_url?: string;
            id: string;
            items_count: number;
        }
        interface Tagging {
            name: string;
            versions: string[];
        }
        interface Team {
            active: boolean;
            id: string;
            name: string;
        }
        interface Template {
            body: string;
            id: number;
            name: string;
            expanded_body: string;
            expanded_tags: any[];
            expanded_title: string;
            tags: any[];
            title: string;
        }
        interface User {
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
            static delete_access_token(params?: {}): Thenable<any>;
        }
        class AuthenticatedUser {
            static get_authenticated_user(params?: {}): Thenable<any>;
        }
        class Comment {
            static delete_comment(params?: {}): Thenable<any>;
            static get_comment(params?: {}): Thenable<any>;
            static update_comment(params: {
                body: string;
            }): Thenable<any>;
            static unthank_comment(params?: {}): Thenable<any>;
            static thank_comment(params?: {}): Thenable<any>;
            static list_item_comments(params?: {}): Thenable<any>;
            static create_item_comment(params: {
                body: string;
            }): Thenable<any>;
        }
        class ExpandedTemplate {
            static create_expanded_template(params: {
                body: string;
                tags: any[];
                title: string;
            }): Thenable<any>;
        }
        class Item {
            static list_authenticated_user_items(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_items(params: {
                page: string;
                per_page: string;
                query: string;
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
            static delete_item(params?: {}): Thenable<any>;
            static get_item(params?: {}): Thenable<any>;
            static update_item(params: {
                body: string;
                coediting: boolean;
                private: boolean;
                tags: any[];
                title: string;
            }): Thenable<any>;
            static unlike_item(params?: {}): Thenable<any>;
            static like_item(params?: {}): Thenable<any>;
            static unstock_item(params?: {}): Thenable<any>;
            static get_item_stock(params?: {}): Thenable<any>;
            static get_item_like(params?: {}): Thenable<any>;
            static stock_item(params?: {}): Thenable<any>;
            static list_tag_items(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_user_items(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_user_stocks(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
        }
        class Like {
            static list_item_likes(params?: {}): Thenable<any>;
        }
        class Project {
            static list_projects(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static create_project(params: {
                archived: boolean;
                body: string;
                name: string;
                tags: any[];
            }): Thenable<any>;
            static delete_project(params?: {}): Thenable<any>;
            static get_project(params?: {}): Thenable<any>;
            static patch_project(params: {
                archived: boolean;
                body: string;
                name: string;
                tags: any[];
            }): Thenable<any>;
        }
        class Tag {
            static list_tags(params: {
                page: string;
                per_page: string;
                sort: string;
            }): Thenable<any>;
            static get_tag(params?: {}): Thenable<any>;
            static list_user_following_tags(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static unfollow_tag(params?: {}): Thenable<any>;
            static get_tag_following(params?: {}): Thenable<any>;
            static follow_tag(params?: {}): Thenable<any>;
        }
        class Tagging {
            static create_tagging(params: {
                name: string;
                versions: string[];
            }): Thenable<any>;
            static delete_tagging(params?: {}): Thenable<any>;
        }
        class Team {
            static list_teams(params?: {}): Thenable<any>;
        }
        class Template {
            static list_templates(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static delete_template(params?: {}): Thenable<any>;
            static get_template(params?: {}): Thenable<any>;
            static create_template(params: {
                body: string;
                name: string;
                tags: any[];
                title: string;
            }): Thenable<any>;
            static update_template(params: {
                body: string;
                name: string;
                tags: any[];
                title: string;
            }): Thenable<any>;
        }
        class User {
            static list_item_stockers(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_users(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static get_user(params?: {}): Thenable<any>;
            static list_user_followees(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static list_user_followers(params: {
                page: string;
                per_page: string;
            }): Thenable<any>;
            static unfollow_user(params?: {}): Thenable<any>;
            static get_user_following(params?: {}): Thenable<any>;
            static follow_user(params?: {}): Thenable<any>;
        }
    }
}
