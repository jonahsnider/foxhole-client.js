/**
 * @internal
 */
export type Adapter<A, B> = Deserializer<A, B> & Serializer<A, B>;

/**
 * @internal
 */
export interface Deserializer<A, B> {
	deserialize(serialized: A): B;
}

/**
 * @internal
 */
export interface Serializer<A, B> {
	serialize(deserialized: B): A;
}
