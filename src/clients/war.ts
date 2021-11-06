import * as Adapters from '../adapters/index.js';
import type {Api, War} from '../index.js';
import {BaseClient} from './index.js';

/**
 * A client for war data.
 *
 * @public
 */
export class WarClient extends BaseClient {
	/**
	 * Fetch data about the current state of the war.
	 *
	 * @returns Data about the current state of the war
	 */
	async fetchState(): Promise<War.State> {
		const apiState = await this.foxholeApi('worldconquest/war').json<Api.War.State>();

		return Adapters.War.state.deserialize(apiState);
	}
}
