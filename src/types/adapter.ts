export type Adapter<A, B> = Deserializer<A, B> & Serializer<A, B>;

export type Deserializer<A, B> = {
	deserialize(serialized: A): B;
};

export type Serializer<A, B> = {
	serialize(deserialized: B): A;
};
