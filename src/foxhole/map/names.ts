import * as ky from 'ky-universal';
import {config} from '../../http';

export async function mapNames(): Promise<string[]> {
	const response = await ky('worldconquest/maps', config);
	const json = await response.json();

	return json;
}
