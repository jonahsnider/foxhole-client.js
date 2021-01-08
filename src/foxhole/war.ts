import {Api} from './api';
import {Team} from './common';

export class War {
	public readonly id: string;
	public readonly number: number;
	public readonly winner: Team | null;
	public readonly conquestTimes: Readonly<{
		start: Date | null;
		end: Date | null;
	}>;

	public readonly resistanceTimes: Readonly<{
		start: Date | null;
	}>;

	public readonly requiredVictoryTowns: number;

	constructor(data: Api.War) {
		this.id = data.warId;
		this.number = data.warNumber;
		switch (data.winner) {
			case Api.Team.Colonials:
				this.winner = Team.Colonials;
				break;
			case Api.Team.Wardens:
				this.winner = Team.Wardens;
				break;
			case Api.Team.None:
				this.winner = null;
				break;
			default:
				throw new RangeError('Invalid winner value');
		}

		this.conquestTimes = {
			start: data.conquestStartTime ? new Date(data.conquestStartTime) : null,
			end: data.conquestEndTime ? new Date(data.conquestEndTime) : null
		};
		this.resistanceTimes = {start: data.resistanceStartTime ? new Date(data.resistanceStartTime) : null};
		this.requiredVictoryTowns = data.requiredVictoryTowns;
	}
}
