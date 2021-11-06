import type {Map, Api} from '../../index.js';
import {Team} from '../../index.js';
import type {Adapter} from '../../types/adapter.js';

export const warReport: Adapter<Api.Map.WarReport, Map.WarReport> = {
	deserialize: apiWar => {
		return {
			totalEnlistments: apiWar.totalEnlistments,
			dayOfWar: apiWar.dayOfWar,
			casualties: {
				[Team.Colonials]: apiWar.colonialCasualties,
				[Team.Wardens]: apiWar.wardenCasualties,
			},
		};
	},
};
