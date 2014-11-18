declare module Qiita {
    interface AccessToken {
        client_id: string;
        scopes: string[];
        token: string;
    }
    interface Comment {
        body: string;
        id: string;
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
            profile_image_url: string;
            twitter_screen_name?: string;
            website_url?: string;
        };
    }
    interface Item {
        body: string;
        coediting: boolean;
        created_at: string;
        id: string;
        private: boolean;
        tags: any[];
        title: string;
        updated_at: any;
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
            profile_image_url: string;
            twitter_screen_name?: string;
            website_url?: string;
        };
    }
    interface Project {
        archived: boolean;
        body: string;
        created_at: string;
        id: string;
        name: string;
        updated_at: any;
    }
    interface ExpandedTemplate {
        expanded_body: string;
        expanded_tags: any[];
        expanded_title: string;
    }
    interface Tag {
        followers_count: number;
        icon_url?: string;
        id: string;
        items_count: number;
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
        profile_image_url: string;
        twitter_screen_name?: string;
        website_url?: string;
    }
}
