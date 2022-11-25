import type {Team} from '../index.js';

/**
 * The current state of the war.
 *
 * @public
 */
export type State = {
	/** Unique ID for the war. */
	warId: `${string}-${string}-${string}-${string}-${string}`;
	/** The current war number for the shard. */
	warNumber: number;
	/** The team that has won the war. */
	winner: Team;
	/** UNIX timestamp in milliseconds of when conquest started. */
	// eslint-disable-next-line @typescript-eslint/ban-types
	conquestStartTime: number | null;
	/** UNIX timestamp in milliseconds of when conquest ended. */
	// eslint-disable-next-line @typescript-eslint/ban-types
	conquestEndTime: number | null;
	/** UNIX timestamp in milliseconds of when the resistance phase started. */
	// eslint-disable-next-line @typescript-eslint/ban-types
	resistanceStartTime: number | null;
	/** Number of victory towns required to win the war. */
	requiredVictoryTowns: number;
};
