import test from 'ava';
import {Api, Team} from '../../../src/index.js';
import * as Adapters from '../../../src/adapters/index.js';

test('serializes Wardens', t => {
	t.is(Adapters.team.serialize(Team.Wardens), Api.Team.Wardens);
});

test('serializes Colonials', t => {
	t.is(Adapters.team.serialize(Team.Colonials), Api.Team.Colonials);
});

test('serializes undefined', t => {
	t.is(Adapters.team.serialize(undefined), Api.Team.None);
});

test('throws on unknown team', t => {
	t.throws(
		() => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			Adapters.team.serialize('unknown' as any);
		},
		{instanceOf: RangeError, message: 'Unknown team: unknown'},
	);
});
