/**
 * @public
 */
export enum Flags {
	/** If this item is a victory base. */
	IsVictoryBase = 0x01,
	/**
	 * If this item is a home base.
	 * @deprecated Removed in API v0.29
	 */
	IsHomeBase = 0x02,
	/** If this item is a build site. */
	IsBuildSite = 0x04,
	/** If this item is scorched. */
	IsScorched = 0x10,
	IsTownClaimed = 0x20,
}
