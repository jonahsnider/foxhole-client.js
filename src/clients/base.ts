import type ky from 'ky-universal';

/**
 * @internal
 */
export class BaseClient {
	/**
	 * @internal
	 */
	constructor(protected readonly foxholeApi: typeof ky) {}
}
