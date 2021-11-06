import test from 'ava';
import nock from 'nock';
import type {Api} from '../../../src/index.js';
import {Client, Team} from '../../../src/index.js';

test.after.always(() => {
	nock.cleanAll();
});

test('fetches war report', async t => {
	const apiBody: Api.Map.WarReport = {
		colonialCasualties: 0,
		dayOfWar: 1,
		totalEnlistments: 2,
		wardenCasualties: 3,
	};

	const scope = nock('http://localhost').get('/worldconquest/warReport/map-name').reply(200, apiBody);

	const client = new Client('http://localhost');

	const warReport = await client.map.fetchWarReport('map-name');

	t.true(scope.isDone());

	t.deepEqual(warReport, {
		dayOfWar: 1,
		totalEnlistments: 2,
		casualties: {
			[Team.Colonials]: 0,
			[Team.Wardens]: 3,
		},
	});
});
