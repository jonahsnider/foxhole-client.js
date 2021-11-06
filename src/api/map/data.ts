import type {Team, Map} from '../index.js';

/**
 * @public
 */
export interface TextItem {
	/** Text string as it would appear on the map in-game. */
	text: string;
	/** Normalized map coordinate. */
	x: number;
	/** Normalized map coordinate. */
	y: number;
	/**
	 * Major markers form the basis of Region Zones.
	 * Minor markers simply indicate areas of interest on the map, but don't have major gameplay impact.
	 */
	mapMarkerType: Map.MarkerType;
}

/**
 * @public
 */
export interface Item {
	/** The team this item belongs to. */
	teamId: Team;
	iconType: Map.Icon;
	/** Normalized map coordinate. */
	x: number;
	/** Normalized map coordinate. */
	y: number;
	flags: number | Map.Flags;
}

/**
 * @public
 */
export interface Data {
	/** Internal region ID for this map. */
	regionId: number;
	/** The number of scorched victory towns. */
	scorchedVictoryTowns: number;
	mapItems: Item[];
	mapTextItems: TextItem[];
	/** UNIX timestamp in milliseconds of when this map was last updated. */
	lastUpdated: number;
	/**
	 * Version number, increments whenever this map data changes.
	 * Used for caching.
	 */
	version: number;
}
