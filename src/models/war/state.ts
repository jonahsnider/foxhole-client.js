import type {Team} from '../team.js';

/**
 * The current state of the war.
 *
 * @public
 */
export interface State {
	/** Unique ID for the war. */
	id: `${string}-${string}-${string}-${string}-${string}`;
	/** The current war number for the shard. */
	number: number;
	/** The team that has won the war. */
	winner: Team | null;
	/** Times for when conquest started and ended. */
	conquestTimes:
		| {
				/** When conquest started. */
				start: null;
				/** When conquest ended. */
				end: null;
		  }
		| {
				/** When conquest started. */
				start: Date;
				/** When conquest ended. */
				end: Date | null;
		  };
	/** Times for when the resistance phase started and ended. */
	resistanceTimes: {
		/** When the resistance phase started. */
		start: Date | null;
	};
	/** Number of victory towns required to win the war. */
	requiredVictoryTownCount: number;
}
