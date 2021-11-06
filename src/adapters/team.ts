import {Api, Team} from '../index.js';
import type {Adapter} from '../types/adapter.js';

export const team: Adapter<Api.Team, Team | null> = {
	deserialize(apiTeam: Api.Team): Team | null {
		switch (apiTeam) {
			case Api.Team.Wardens:
				return Team.Wardens;
			case Api.Team.Colonials:
				return Team.Colonials;
			case Api.Team.None:
				return null;
			default:
				throw new RangeError(`Unknown API team: ${String(apiTeam)}`);
		}
	},

	serialize(team: Team | null): Api.Team {
		switch (team) {
			case Team.Wardens:
				return Api.Team.Wardens;
			case Team.Colonials:
				return Api.Team.Colonials;
			case null:
				return Api.Team.None;
			default:
				throw new RangeError(`Unknown team: ${String(team)}`);
		}
	},
};
