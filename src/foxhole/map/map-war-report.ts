import * as ky from 'ky-universal';
import {config} from '../../http';
import {Api} from '../api';
import {Team} from '../common';

export class MapWarReport {
	readonly totalEnlistments: number;
	readonly casualties: Record<Team, number>;
	readonly dayOfWar: number;

	constructor(data: Api.MapWarReport) {
		this.totalEnlistments = data.totalEnlistments;
		this.casualties = {
			[Team.Colonials]: data.colonialCasualties,
			[Team.Wardens]: data.wardenCasualties
		};
		this.dayOfWar = data.dayOfWar;
	}
}

export async function fetchMapWarReport(mapName: string): Promise<MapWarReport> {
	const response = await ky(`worldconquest/warReport/${encodeURIComponent(mapName)}`, config);
	const data = await response.json();
	const mapWarReport = new MapWarReport(data);

	return mapWarReport;
}
