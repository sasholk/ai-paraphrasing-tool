import { CmsProvider, LandingContent } from '../types';

class ContentfulProvider implements CmsProvider {
  async getLandingContent(): Promise<LandingContent> {
    // TODO: Implement Contentful-specific logic using their SDK
    // Example implementation:
    // const client = createClient({
    //   space: process.env.CONTENTFUL_SPACE_ID!,
    //   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    // });
    // const entry = await client.getEntry('<landing-page-entry-id>');
    throw new Error('Contentful integration not implemented');
  }
}

export const client = new ContentfulProvider();
