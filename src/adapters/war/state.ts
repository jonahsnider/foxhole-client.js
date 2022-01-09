import type {Api, War} from '../../index.js';
import type {Deserializer} from '../../types/adapter.js';
import * as Adapters from '../index.js';

export const state: Deserializer<Api.War.State, War.State> = {
	deserialize(apiWar) {
		let conquestTimes: War.State['conquestTimes'];

		if (apiWar.conquestStartTime === null) {
			if (apiWar.conquestEndTime === null) {
				conquestTimes = {start: undefined, end: undefined};
			} else {
				throw new TypeError('conquestEndTime must be undefined when conquestStartTime is undefined');
			}
		} else {
			conquestTimes = {
				start: new Date(apiWar.conquestStartTime),
				end: apiWar.conquestEndTime === null ? undefined : new Date(apiWar.conquestEndTime),
			};
		}

		return {
			id: apiWar.warId,
			number: apiWar.warNumber,
			winner: Adapters.team.deserialize(apiWar.winner),
			conquestTimes,
			resistanceTimes: {
				start: apiWar.resistanceStartTime === null ? undefined : new Date(apiWar.resistanceStartTime),
			},
			requiredVictoryTownCount: apiWar.requiredVictoryTowns,
		};
	},
};
