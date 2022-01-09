import test from 'ava';
import nock from 'nock';
import {Api, Client} from '../../../src/index.js';

test.after.always(() => {
	nock.cleanAll();
});

test('fetches state', async t => {
	const apiBody: Api.War.State = {
		winner: Api.Team.None,
		warNumber: 1,
		warId: '0-0-0-0-0',
		resistanceStartTime: 2,
		conquestStartTime: 3,
		conquestEndTime: 4,
		requiredVictoryTowns: 5,
	};

	const scope = nock('http://localhost').get('/worldconquest/war').reply(200, apiBody);

	const client = new Client('http://localhost');

	const state = await client.war.fetchState();

	t.true(scope.isDone());

	t.deepEqual(state, {
		winner: undefined,
		number: 1,
		id: '0-0-0-0-0',
		resistanceTimes: {start: new Date(2)},
		conquestTimes: {start: new Date(3), end: new Date(4)},
		requiredVictoryTownCount: 5,
	});
});
