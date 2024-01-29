import type { Schema, Attribute } from '@strapi/strapi';

export interface ConsumerWebConfigBlogs extends Schema.Component {
  collectionName: 'components_consumer_web_config_blogs';
  info: {
    displayName: 'blogs';
  };
  attributes: {
    value: Attribute.Integer;
    blog: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    title: Attribute.String;
    dateofPublish: Attribute.Date;
  };
}

export interface ConsumerWebConfigContactUs extends Schema.Component {
  collectionName: 'components_consumer_web_config_contactuses';
  info: {
    displayName: 'ContactUs';
  };
  attributes: {
    type: Attribute.String;
    staticmap: Attribute.String;
    address: Attribute.Text;
  };
}

export interface ConsumerWebConfigHowItWorks extends Schema.Component {
  collectionName: 'components_consumer_web_config_how_it_works';
  info: {
    displayName: 'HowItWorks';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ConsumerWebConfigIntroduction extends Schema.Component {
  collectionName: 'components_consumer_web_config_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ConsumerWebConfigMediaCenter extends Schema.Component {
  collectionName: 'components_consumer_web_config_media_centers';
  info: {
    displayName: 'MediaCenter';
  };
  attributes: {
    headline: Attribute.String;
    media: Attribute.Component<'repeat-components.media'>;
    by: Attribute.String;
    date: Attribute.Date;
    content: Attribute.Text;
  };
}

export interface ConsumerWebConfigNewAndHotProperties extends Schema.Component {
  collectionName: 'components_consumer_web_config_new_and_hot_properties';
  info: {
    displayName: 'NewAndHotProperties';
  };
  attributes: {
    value: Attribute.Integer;
    propertyName: Attribute.String;
    gid: Attribute.String;
    projid: Attribute.String;
    projectCategory: Attribute.String;
    projectName: Attribute.String;
    image: Attribute.Media;
    locationanddetails: Attribute.String;
    staticMap: Attribute.String;
    projectSlug: Attribute.String;
    orgSlug: Attribute.String;
  };
}

export interface ConsumerWebConfigTeams extends Schema.Component {
  collectionName: 'components_consumer_web_config_teams';
  info: {
    displayName: 'Teams';
    description: '';
  };
  attributes: {
    banner: Attribute.Media;
    bio1: Attribute.Component<'repeat-components.bio2'>;
    bio2: Attribute.Component<'repeat-components.bio2'>;
    bio3: Attribute.Component<'repeat-components.bio2'>;
    bio4: Attribute.Component<'repeat-components.bio2'>;
    bio5: Attribute.Component<'repeat-components.bio2'>;
  };
}

export interface ConsumerWebConfigTestimonials extends Schema.Component {
  collectionName: 'components_consumer_web_config_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    value: Attribute.Integer;
    name: Attribute.String;
    designation: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ConsumerWebConfigVersionAndHistory extends Schema.Component {
  collectionName: 'components_consumer_web_config_version_and_histories';
  info: {
    displayName: 'VersionAndHistory';
  };
  attributes: {
    type: Attribute.String;
    description: Attribute.Text;
    mediaImage: Attribute.Media;
  };
}

export interface ConsumerWebConfigVisionAndMission extends Schema.Component {
  collectionName: 'components_consumer_web_config_vision_and_missions';
  info: {
    displayName: 'VisionAndMission';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface MagicalFeatureConsumerWebConfig extends Schema.Component {
  collectionName: 'components_magical_feature_consumer_web_configs';
  info: {
    displayName: 'ConsumerWebConfig';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lens: Attribute.Component<'magical-feature.lens'>;
    deepinsights: Attribute.Component<'magical-feature.deepinsights'>;
    tales: Attribute.Component<'magical-feature.tales'>;
    onlineBookings: Attribute.Component<'magical-feature.online-bookings'>;
  };
}

export interface MagicalFeatureDeepinsights extends Schema.Component {
  collectionName: 'components_magical_feature_deepinsights';
  info: {
    displayName: 'deepinsights';
    description: '';
  };
  attributes: {
    featuretype: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    lottie: Attribute.String &
      Attribute.CustomField<'plugin::strapi-plugin-lottie.lottie'>;
  };
}

export interface MagicalFeatureLens extends Schema.Component {
  collectionName: 'components_magical_feature_lens';
  info: {
    displayName: 'Lens';
    description: '';
  };
  attributes: {
    featuretype: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    lottie: Attribute.String &
      Attribute.CustomField<'plugin::strapi-plugin-lottie.lottie'>;
  };
}

export interface MagicalFeatureOnlineBookings extends Schema.Component {
  collectionName: 'components_magical_feature_online_bookings';
  info: {
    displayName: 'onlineBookings';
    description: '';
  };
  attributes: {
    featuretype: Attribute.String;
    description: Attribute.Text;
    lottie: Attribute.String &
      Attribute.CustomField<'plugin::strapi-plugin-lottie.lottie'>;
  };
}

export interface MagicalFeatureTales extends Schema.Component {
  collectionName: 'components_magical_feature_tales';
  info: {
    displayName: 'tales';
    description: '';
  };
  attributes: {
    featuretype: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    lottie: Attribute.String &
      Attribute.CustomField<'plugin::strapi-plugin-lottie.lottie'>;
  };
}

export interface RepeatComponentsBio2 extends Schema.Component {
  collectionName: 'components_repeat_components_bio2s';
  info: {
    displayName: 'bio';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    designation: Attribute.String;
    description: Attribute.Text;
    linkedIn: Attribute.String;
    twitter: Attribute.String;
  };
}

export interface RepeatComponentsMedia extends Schema.Component {
  collectionName: 'components_repeat_components_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    link: Attribute.String;
    image: Attribute.Media;
  };
}

export interface RepeatComponentsSocialMedia extends Schema.Component {
  collectionName: 'components_repeat_components_social_medias';
  info: {
    displayName: 'SocialMedia';
  };
  attributes: {
    linkedIn: Attribute.String;
    twitter: Attribute.String;
    instagram: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'consumer-web-config.blogs': ConsumerWebConfigBlogs;
      'consumer-web-config.contact-us': ConsumerWebConfigContactUs;
      'consumer-web-config.how-it-works': ConsumerWebConfigHowItWorks;
      'consumer-web-config.introduction': ConsumerWebConfigIntroduction;
      'consumer-web-config.media-center': ConsumerWebConfigMediaCenter;
      'consumer-web-config.new-and-hot-properties': ConsumerWebConfigNewAndHotProperties;
      'consumer-web-config.teams': ConsumerWebConfigTeams;
      'consumer-web-config.testimonials': ConsumerWebConfigTestimonials;
      'consumer-web-config.version-and-history': ConsumerWebConfigVersionAndHistory;
      'consumer-web-config.vision-and-mission': ConsumerWebConfigVisionAndMission;
      'magical-feature.consumer-web-config': MagicalFeatureConsumerWebConfig;
      'magical-feature.deepinsights': MagicalFeatureDeepinsights;
      'magical-feature.lens': MagicalFeatureLens;
      'magical-feature.online-bookings': MagicalFeatureOnlineBookings;
      'magical-feature.tales': MagicalFeatureTales;
      'repeat-components.bio2': RepeatComponentsBio2;
      'repeat-components.media': RepeatComponentsMedia;
      'repeat-components.social-media': RepeatComponentsSocialMedia;
    }
  }
}
