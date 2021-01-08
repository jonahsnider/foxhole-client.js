import {CoordinatePair} from '../../common';
import {http} from '../../http';
import {Api} from '../api';
import {Team} from '../common';

export interface MapIconFlags {
	victoryBase: boolean;
	/** @deprecated */
	homeBase: boolean;
	buildSite: boolean;
	scorched: boolean;
	townClaimed: boolean;
}

export interface MapItem {
	team: Team | null;
	icon: Api.MapIcon;
	coordinates: CoordinatePair;
	flags: MapIconFlags;
}

export interface MapTextItem {
	text: string;
	coordinates: CoordinatePair;
	mapMarkerType: Api.MapMarkerType;
}

export class MapData {
	readonly regionId: number;
	readonly scorchedVictoryTowns: number;
	readonly mapItems: readonly MapItem[];
	readonly mapTextItems: readonly MapTextItem[];
	readonly lastUpdated: Date;
	readonly version: number;

	constructor(data: Api.MapData) {
		this.regionId = data.regionId;
		this.scorchedVictoryTowns = data.scorchedVictoryTowns;
		this.mapItems = data.mapItems.map(mapItem => {
			let team: Team | null;

			switch (mapItem.teamId) {
				case Api.Team.Colonials:
					team = Team.Colonials;
					break;
				case Api.Team.Wardens:
					team = Team.Wardens;
					break;
				case Api.Team.None:
					team = null;
					break;
				default:
					throw new RangeError('Invalid teamId value');
			}

			return {
				coordinates: [mapItem.x, mapItem.y],
				icon: mapItem.iconType,
				team,
				flags: {
					victoryBase: (mapItem.flags & Api.MapFlags.IsVictoryBase) === mapItem.flags,
					homeBase: (mapItem.flags & Api.MapFlags.IsHomeBase) === mapItem.flags,
					buildSite: (mapItem.flags & Api.MapFlags.IsBuildSite) === mapItem.flags,
					scorched: (mapItem.flags & Api.MapFlags.IsScorched) === mapItem.flags,
					townClaimed: (mapItem.flags & Api.MapFlags.IsTownClaimed) === mapItem.flags
				}
			};
		});
		this.mapTextItems = data.mapTextItems.map(({x, y, ...rest}) => ({coordinates: [x, y], ...rest}));
		this.lastUpdated = new Date(data.lastUpdated);
		this.version = data.version;
	}
}

export async function fetchDynamicMapData(mapName: string): Promise<MapData> {
	const response = await http(`worldconquest/maps/${encodeURIComponent(mapName)}/dynamic/public`);
	const data = await response.json();
	const dynamicMap = new MapData(data);

	return dynamicMap;
}

export async function fetchStaticMapData(mapName: string): Promise<MapData> {
	const response = await http(`worldconquest/maps/${encodeURIComponent(mapName)}/static`, {cache: 'force-cache'});
	const data = await response.json();
	const staticMap = new MapData(data);

	return staticMap;
}

export function isLaunchedRocketSite(mapItem: MapItem): boolean {
	return mapItem.icon === Api.MapIcon.RocketSite && mapItem.team !== null && mapItem.flags.scorched;
}
