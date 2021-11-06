/**
 * Map specific information.
 * @public
 */
export interface WarReport {
	/** The number of enlistments. */
	totalEnlistments: number;
	/** The number of casualties on the Colonial team. */
	colonialCasualties: number;
	/** The number of casualties on the Warden team. */
	wardenCasualties: number;
	/** The current day of war. */
	dayOfWar: number;
}
