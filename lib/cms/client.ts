export interface CmsClient {
  getLandingContent(): Promise<{ title: string; subtitle: string }>;
}

export async function getCmsClient(): Promise<CmsClient> {
  switch (process.env.CMS_PROVIDER) {
    case 'contentful':
      return (await import('./providers/contentful')).client;
    default:
      return { async getLandingContent() {
        return {
          title: 'AI Text Paraphraser by JustDone',
          subtitle:
            'Transform your writing from good to great with our Paraphraser tool.',
        };
      }};
  }
}
