import test from 'ava';
import {Api, Team} from '../../../src/index.js';
import * as Adapters from '../../../src/adapters/index.js';

test('deserializes Wardens', t => {
	t.is(Adapters.team.deserialize(Api.Team.Wardens), Team.Wardens);
});

test('deserializes Colonials', t => {
	t.is(Adapters.team.deserialize(Api.Team.Colonials), Team.Colonials);
});

test('deserializes None', t => {
	t.is(Adapters.team.deserialize(Api.Team.None), undefined);
});

test('throws on unknown team', t => {
	t.throws(
		() => {
			Adapters.team.deserialize('unknown' as any);
		},
		{instanceOf: RangeError, message: 'Unknown API team: unknown'},
	);
});
