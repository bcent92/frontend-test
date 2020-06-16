import { environment as env } from '@env/environment';

/**
 * Api base url
 */
export const config = {
	version: require('../../package.json').version,
	production: env.production,
	apiBaseUrl: env.apiUrl
};
