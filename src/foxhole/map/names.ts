import * as ky from 'ky-universal';
import {defaultApiUrl} from '../../http';

export async function mapNames(apiUrl = defaultApiUrl): Promise<string[]> {
	const response = await ky('worldconquest/maps', {prefixUrl: apiUrl});
	const json = (await response.json()) as string[];

	return json;
}
