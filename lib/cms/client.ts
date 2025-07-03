import { CmsProvider, SupportedCmsProvider } from './types';

export async function getCmsClient(): Promise<CmsProvider> {
  const provider = (process.env.CMS_PROVIDER || 'default') as SupportedCmsProvider;

  try {
    return (await import(`./providers/${provider}`)).client;
  } catch (error) {
    console.warn(`Failed to load ${provider} CMS provider, falling back to default`, error);
    return (await import('./providers/default')).client;
  }
}
