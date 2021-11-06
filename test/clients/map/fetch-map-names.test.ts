import test from 'ava';
import nock from 'nock';
import {Client} from '../../../src/index.js';

test.after.always(() => {
	nock.cleanAll();
});

test('fetches map names', async t => {
	const scope = nock('http://localhost').get('/worldconquest/maps').reply(200, ['a', 'b', 'c']);

	const client = new Client('http://localhost');

	const mapNames = await client.map.fetchMapNames();

	t.true(scope.isDone());

	t.deepEqual(mapNames, ['a', 'b', 'c']);
});
