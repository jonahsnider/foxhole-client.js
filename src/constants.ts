import type {Coordinates} from './types/common.js';

/**
 * The minimum and maximum in-game world units.
 * Used for mapping normalized coordinates to in-game coordinates.
 *
 * @public
 */
export const WORLD_EXTENT: Readonly<Record<'minimum' | 'maximum', Coordinates>> = {
	/* eslint-disable @typescript-eslint/no-loss-of-precision */
	minimum: {x: -109_199.999_997, y: -94_499.999_995_809_069_684_109_89},
	maximum: {x: 109_199.999_997, y: 94_499.999_995_809_069_684_109_89},
	/* eslint-enable @typescript-eslint/no-loss-of-precision */
};
