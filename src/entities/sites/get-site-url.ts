import { getSiteDomain } from './get-site-domain';
import { Site } from './site';
import { env } from '../../env/env';
import { URL } from 'url';

const sitesUrl = new URL(env.MELI_SITES_URL);

export function getSiteUrl(site: Site) {
  return `${sitesUrl.protocol}//${getSiteDomain(site)}`;
}
