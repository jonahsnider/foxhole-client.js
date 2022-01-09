import test from 'ava';
import * as Adapters from '../../../../src/adapters/index.js';
import {Api} from '../../../../src/index.js';

test('deserializes when conquest is not started', t => {
	t.deepEqual(
		Adapters.War.state.deserialize({
			conquestStartTime: null,
			conquestEndTime: null,
			requiredVictoryTowns: 0,
			resistanceStartTime: 1,
			warId: '0-0-0-0-0',
			warNumber: 0,
			winner: Api.Team.None,
		}),
		{
			conquestTimes: {
				start: undefined,
				end: undefined,
			},
			id: '0-0-0-0-0',
			number: 0,
			requiredVictoryTownCount: 0,
			resistanceTimes: {
				start: new Date(1),
			},
			winner: undefined,
		},
	);
});

test('deserializes when conquest is in progress', t => {
	t.deepEqual(
		Adapters.War.state.deserialize({
			conquestStartTime: 1,
			conquestEndTime: null,
			requiredVictoryTowns: 0,
			resistanceStartTime: 3,
			warId: '0-0-0-0-0',
			warNumber: 0,
			winner: Api.Team.None,
		}),
		{
			conquestTimes: {
				start: new Date(1),
				end: undefined,
			},
			id: '0-0-0-0-0',
			number: 0,
			requiredVictoryTownCount: 0,
			resistanceTimes: {
				start: new Date(3),
			},
			winner: undefined,
		},
	);
});

test('deserializes when conquest is finished', t => {
	t.deepEqual(
		Adapters.War.state.deserialize({
			conquestStartTime: 1,
			conquestEndTime: 2,
			requiredVictoryTowns: 0,
			resistanceStartTime: 3,
			warId: '0-0-0-0-0',
			warNumber: 0,
			winner: Api.Team.None,
		}),
		{
			conquestTimes: {
				start: new Date(1),
				end: new Date(2),
			},
			id: '0-0-0-0-0',
			number: 0,
			requiredVictoryTownCount: 0,
			resistanceTimes: {
				start: new Date(3),
			},
			winner: undefined,
		},
	);
});

test('deserializes when resistance phase is not started', t => {
	t.deepEqual(
		Adapters.War.state.deserialize({
			conquestStartTime: 1,
			conquestEndTime: 2,
			requiredVictoryTowns: 0,
			resistanceStartTime: null,
			warId: '0-0-0-0-0',
			warNumber: 0,
			winner: Api.Team.None,
		}),
		{
			conquestTimes: {
				start: new Date(1),
				end: new Date(2),
			},
			id: '0-0-0-0-0',
			number: 0,
			requiredVictoryTownCount: 0,
			resistanceTimes: {
				start: undefined,
			},
			winner: undefined,
		},
	);
});

test('throws on invalid conquest times', t => {
	t.throws(
		() => {
			Adapters.War.state.deserialize({
				conquestStartTime: null,
				conquestEndTime: 1,
				requiredVictoryTowns: 0,
				resistanceStartTime: 1,
				warId: '0-0-0-0-0',
				warNumber: 0,
				winner: Api.Team.None,
			});
		},
		{instanceOf: TypeError, message: 'conquestEndTime must be undefined when conquestStartTime is undefined'},
	);
});
