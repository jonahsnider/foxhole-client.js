import * as Adapters from '../adapters/index.js';
import type {Api, Map} from '../index.js';
import {BaseClient} from './index.js';

/**
 * A client for map data.
 *
 * @public
 */
export class MapClient extends BaseClient {
	/**
	 * Fetch public dynamic map data for a given map.
	 *
	 * Dynamic map data includes map icons that could change over the lifecycle of a map.
	 * This includes static bases and static base build sites.
	 * Team-specific data for and forward bases are excluded.
	 * This data may update every 3 seconds.
	 *
	 * @param mapName - The map name to get data for
	 *
	 * @returns The public dynamic map data
	 */
	async fetchDynamicPublicData(mapName: string): Promise<Map.Data> {
		const apiMapData = await this.foxholeApi(`worldconquest/maps/${encodeURIComponent(mapName)}/dynamic/public`).json<Api.Map.Data>();

		return Adapters.Map.data.deserialize(apiMapData);
	}

	/**
	 * Fetch static map data for a given map.
	 *
	 * Static map data includes things that never change over the lifecycle of a map.
	 * This includes map text labels, resource nodes, and world structures.
	 * You only need to request this once per map between World Conquests.
	 *
	 * @param mapName - The map name to get data for
	 * @returns The static map data
	 */
	async fetchStaticData(mapName: string): Promise<Map.Data> {
		const apiMapData = await this.foxholeApi(`worldconquest/maps/${encodeURIComponent(mapName)}/static`).json<Api.Map.Data>();

		return Adapters.Map.data.deserialize(apiMapData);
	}

	/**
	 * Fetch a list of all map names.
	 *
	 * @returns A list of all map names
	 */
	async fetchMapNames(): Promise<string[]> {
		return this.foxholeApi('worldconquest/maps').json<string[]>();
	}

	/**
	 * Fetch the number of enlistments, casualties, and other map specific information for a given map.
	 *
	 * @param mapName - The map name to get data for
	 *
	 * @returns The number of enlistments, casualties, and other map specific information
	 */
	async fetchWarReport(mapName: string): Promise<Map.WarReport> {
		// The Foxhole API doesn't fully conform to REST, so even though this is a "Map Data" route it's not under the "/worldconquest/maps" path
		const apiWarReport = await this.foxholeApi(`worldconquest/warReport/${encodeURIComponent(mapName)}`).json<Api.Map.WarReport>();

		return Adapters.Map.warReport.deserialize(apiWarReport);
	}
}
