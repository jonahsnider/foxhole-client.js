/**
 * @internal
 */
export interface Adapter<A, B> {
	deserialize(serialized: A): B;

	serialize?(deserialized: B): A;
}
