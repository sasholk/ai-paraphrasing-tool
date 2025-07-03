import { CmsProvider, LandingContent } from '../types';

class StrapiProvider implements CmsProvider {
  async getLandingContent(): Promise<LandingContent> {
    // TODO: Implement Strapi-specific logic
    // Example implementation:
    // const response = await fetch(`${process.env.STRAPI_API_URL}/api/landing-page`, {
    //   headers: {
    //     Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    //   },
    // });
    // const data = await response.json();
    throw new Error('Strapi integration not implemented');
  }
}

export const client = new StrapiProvider();
