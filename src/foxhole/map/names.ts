import {http} from '../../http';

export async function mapNames(): Promise<string[]> {
	const response = await http('worldconquest/maps');
	const json = await response.json();

	return json;
}
