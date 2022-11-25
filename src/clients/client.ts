import ky from 'ky-universal';
import {BaseClient, MapClient, WarClient} from './index.js';

/**
 * Official Foxhole shards.
 *
 * @public
 */
export enum Shard {
	/**
	 * The shard for the Foxhole dev branch.
	 *
	 * In general, any data from this endpoint should not be considered final, and is subject to change frequently.
	 *
	 * @see https://github.com/clapfoot/warapi#dev-branch
	 */
	Dev = 'dev',
	Live1 = 1,
	Live2 = 2,
}

/**
 * The main Foxhole War API client.
 *
 * @example
 * ```js
 * import Foxhole from 'foxhole-client';
 *
 * const foxhole = new Foxhole();
 * ```
 *
 * @public
 */
export class Client extends BaseClient {
	static #shardToUrl(shard: Shard | number) {
		switch (shard) {
			case Shard.Dev: {
				return 'https://war-service-dev.foxholeservices.com/api' as const;
			}

			case Shard.Live1: {
				return 'https://war-service-live.foxholeservices.com/api' as const;
			}

			default: {
				return `https://war-service-live-${shard}.foxholeservices.com/api` as const;
			}
		}
	}

	/** Client for accessing war data on this shard. */
	public readonly war = new WarClient(this.foxholeApi);
	/** Client for accessing map data on this shard. */
	public readonly map = new MapClient(this.foxholeApi);
	/** The base URL to use in API requests. */
	public readonly url: string;

	/**
	 * Create a {@link Client} instance for a given shard.
	 *
	 * @example
	 * ```js
	 * import Foxhole from 'foxhole-client';
	 *
	 * // Any shard
	 * const foxhole = new Foxhole(123);
	 * ```
	 *
	 * @example
	 * ```js
	 * import Foxhole, { Shard } from 'foxhole-client';
	 *
	 * // Dev branch
	 * const foxhole = new Foxhole(Shard.Dev);
	 * ```
	 *
	 * @param shard - The official Foxhole shard to use
	 */
	constructor(shard: Shard | number);
	/**
	 * Create a {@link Client} instance for a given URL.
	 *
	 * @example
	 * ```js
	 * import Foxhole from 'foxhole-client';
	 *
	 * // Shard 1
	 * const foxhole = new Foxhole();
	 * ```
	 *
	 * @example
	 * ```js
	 * import Foxhole from 'foxhole-client';
	 *
	 * // Custom URL
	 * const foxhole = new Foxhole('https://example.com/api');
	 * ```
	 *
	 * @param url - The URL of the War API to use
	 */
	constructor(url?: string);
	constructor(urlOrShard: string | Shard | number = Shard.Live1) {
		const url = typeof urlOrShard === 'number' || urlOrShard === Shard.Dev ? Client.#shardToUrl(urlOrShard) : urlOrShard;

		const http = ky.create({
			prefixUrl: url,
			headers: {
				'User-Agent': 'foxhole-client.js (+https://github.com/jonahsnider/foxhole-client.js)',
			},
		});

		super(http);

		this.url = url;
	}
}
