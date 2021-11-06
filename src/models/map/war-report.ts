import type {Team} from '../index.js';

/**
 * Map specific information.
 * @public
 */
export interface WarReport {
	/** The number of enlistments. */
	totalEnlistments: number;
	/** The number of casualties per team. */
	casualties: Record<Team, number>;
	/** The current day of war. */
	dayOfWar: number;
}
