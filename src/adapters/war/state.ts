import type {Api, War} from '../../index.js';
import type {Adapter} from '../../types/adapter.js';
import * as Adapters from '../index.js';

export const state: Adapter<Api.War.State, War.State> = {
	deserialize: apiWar => {
		let conquestTimes: War.State['conquestTimes'];

		if (apiWar.conquestStartTime === null) {
			if (apiWar.conquestEndTime === null) {
				conquestTimes = {start: null, end: null};
			} else {
				throw new TypeError('conquestEndTime must be null when conquestStartTime is null');
			}
		} else {
			conquestTimes = {
				start: new Date(apiWar.conquestStartTime),
				end: apiWar.conquestEndTime === null ? null : new Date(apiWar.conquestEndTime),
			};
		}

		return {
			id: apiWar.warId,
			number: apiWar.warNumber,
			winner: Adapters.team.deserialize(apiWar.winner),
			conquestTimes,
			resistanceTimes: {
				start: apiWar.resistanceStartTime === null ? null : new Date(apiWar.resistanceStartTime),
			},
			requiredVictoryTownCount: apiWar.requiredVictoryTowns,
		};
	},
};
