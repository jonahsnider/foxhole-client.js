import test from 'ava';
import {Client} from '../../../src/index.js';

test('sets default URL', t => {
	const client = new Client();

	t.is(client.url, 'https://war-service-live.foxholeservices.com/api');
});

test('sets custom URL', t => {
	const client = new Client('https://example.com');

	t.is(client.url, 'https://example.com');
});

test('sets dev URL', t => {
	const client = new Client('dev');

	t.is(client.url, 'https://war-service-dev.foxholeservices.com/api');
});

test('sets shard URL', t => {
	const client = new Client(2);

	t.is(client.url, 'https://war-service-live-2.foxholeservices.com/api');
});
