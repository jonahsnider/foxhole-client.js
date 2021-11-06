import type {Map} from '../../index.js';
import {Api} from '../../index.js';
import type {Adapter} from '../../types/adapter.js';
import * as Adapters from '../index.js';

const textItemAdapter: Adapter<Api.Map.TextItem, Map.TextItem> = {
	deserialize(apiTextItem) {
		return {
			text: apiTextItem.text,
			mapMarkerType: apiTextItem.mapMarkerType,
			coordinates: {x: apiTextItem.x, y: apiTextItem.y},
		};
	},
};

const itemAdapter: Adapter<Api.Map.Item, Map.Item> = {
	deserialize(apiItem) {
		// eslint-disable-next-line no-bitwise
		const isScorched = (apiItem.flags | Api.Map.Flags.IsScorched) === apiItem.flags;

		return {
			team: Adapters.team.deserialize(apiItem.teamId),
			icon: apiItem.iconType,
			coordinates: {x: apiItem.x, y: apiItem.y},
			flags: {
				/* eslint-disable no-bitwise */
				isVictoryBase: (apiItem.flags | Api.Map.Flags.IsVictoryBase) === apiItem.flags,
				isHomeBase: (apiItem.flags | Api.Map.Flags.IsHomeBase) === apiItem.flags,
				isBuildSite: (apiItem.flags | Api.Map.Flags.IsBuildSite) === apiItem.flags,
				isScorched,
				isTownClaimed: (apiItem.flags | Api.Map.Flags.IsTownClaimed) === apiItem.flags,
				isLaunchedRocketSite: isScorched && apiItem.iconType === Api.Map.Icon.RocketSite && apiItem.teamId !== Api.Team.None,
				/* eslint-enable no-bitwise */
			},
		};
	},
};

export const data: Adapter<Api.Map.Data, Map.Data> = {
	deserialize(apiData) {
		return {
			regionId: apiData.regionId,
			scorchedVictoryTownCount: apiData.scorchedVictoryTowns,
			items: apiData.mapItems.map(apiItem => itemAdapter.deserialize(apiItem)),
			textItems: apiData.mapTextItems.map(apiTextItem => textItemAdapter.deserialize(apiTextItem)),
			lastUpdated: new Date(apiData.lastUpdated),
			version: apiData.version,
		};
	},
};
