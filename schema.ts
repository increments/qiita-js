declare class AccessToken {
  public client_id: string;
  public scopes: string[];
  public token: string;
}
declare class Comment {
  public body: string;
  public id: string;
  public user: any;
}
declare class Item {
  public body: string;
  public coediting: boolean;
  public created_at: string;
  public id: string;
  public private: boolean;
  public tags: any[];
  public title: string;
  public updated_at: any;
  public user: any;
}
declare class Project {
  public archived: boolean;
  public body: string;
  public created_at: string;
  public id: string;
  public name: string;
  public updated_at: any;
}
declare class ExpandedTemplate {
  public expanded_body: string;
  public expanded_tags: any[];
  public expanded_title: string;
}
declare class Tag {
  public followers_count: any;
  public icon_url: any;
  public id: string;
  public items_count: any;
}
declare class Template {
  public body: string;
  public id: any;
  public name: string;
  public expanded_body: string;
  public expanded_tags: any[];
  public expanded_title: string;
  public tags: any[];
  public title: string;
}
declare class User {
  public description: any;
  public facebook_id: any;
  public followees_count: any;
  public followers_count: any;
  public github_login_name: any;
  public id: string;
  public items_count: any;
  public linkedin_id: any;
  public location: any;
  public name: any;
  public organization: any;
  public profile_image_url: string;
  public twitter_screen_name: any;
  public website_url: any;
}
