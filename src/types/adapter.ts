export type Adapter<A, B> = Deserializer<A, B> & Serializer<A, B>;

export interface Deserializer<A, B> {
	deserialize(serialized: A): B;
}

export interface Serializer<A, B> {
	serialize(deserialized: B): A;
}
