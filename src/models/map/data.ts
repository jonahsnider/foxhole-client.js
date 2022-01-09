import type {Api} from '../../index.js';
import type {Team} from '../index.js';
import type {Coordinates} from '../../types/common.js';

/**
 * @public
 */
export interface TextItem {
	/** Text string as it would appear on the map in-game. */
	text: string;
	mapMarkerType: Api.Map.MarkerType;
	/** Normalized map coordinates. */
	coordinates: Coordinates;
}

/**
 * @public
 */
export interface Item {
	/** The team this item belongs to. */
	team: Team | undefined;
	icon: Api.Map.Icon;
	/** Normalized map coordinates. */
	coordinates: Coordinates;
	flags: {
		/** If this item is a victory base. */
		isVictoryBase: boolean;
		/**
		 * If this item is a home base.
		 * @deprecated Removed in API v0.29
		 */
		isHomeBase: boolean;
		/** If this item is a build site. */
		isBuildSite: boolean;
		/** If this item is scorched. */
		isScorched: boolean;
		isTownClaimed: boolean;

		/** If this item is a launched rocket site. */
		isLaunchedRocketSite: boolean;
	};
}

/**
 * @public
 */
export interface Data {
	/** Internal region ID for this map. */
	regionId: number;
	/** The number of scorched victory towns. */
	scorchedVictoryTownCount: number;
	items: Item[];
	textItems: TextItem[];
	/** When this map was last updated. */
	lastUpdated: Date;
	/**
	 * Version number, increments whenever this map data changes.
	 * Used for caching.
	 */
	version: number;
}
