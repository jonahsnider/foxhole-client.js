import {Api, Team} from '../index.js';
import type {Adapter} from '../types/adapter.js';

export const team: Adapter<Api.Team, Team | undefined> = {
	deserialize(apiTeam: Api.Team): Team | undefined {
		switch (apiTeam) {
			case Api.Team.Wardens:
				return Team.Wardens;
			case Api.Team.Colonials:
				return Team.Colonials;
			case Api.Team.None:
				return undefined;
			default:
				throw new RangeError(`Unknown API team: ${String(apiTeam)}`);
		}
	},

	serialize(team: Team | undefined): Api.Team {
		switch (team) {
			case Team.Wardens:
				return Api.Team.Wardens;
			case Team.Colonials:
				return Api.Team.Colonials;
			case undefined:
				return Api.Team.None;
			default:
				throw new RangeError(`Unknown team: ${String(team)}`);
		}
	},
};
