export interface LandingContent {
  title: string;
  subtitle: string;
}

export interface CmsProvider {
  getLandingContent(): Promise<LandingContent>;
}

export type SupportedCmsProvider = 'contentful' | 'strapi' | 'sanity' | 'default';
