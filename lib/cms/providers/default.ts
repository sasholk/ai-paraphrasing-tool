import { CmsProvider, LandingContent } from '../types';

class DefaultProvider implements CmsProvider {
  async getLandingContent(): Promise<LandingContent> {
    return {
      title: "AI Text Paraphraser by JustDone",
      subtitle: "Transform your writing from good to great with our Paraphraser tool.",
    };
  }
}

export const client = new DefaultProvider();
