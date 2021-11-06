import test from 'ava';
import * as Adapters from '../../../../src/adapters/index.js';
import {Team} from '../../../../src/index.js';

test('deserializes', t => {
	t.deepEqual(
		Adapters.Map.warReport.deserialize({
			colonialCasualties: 1,
			wardenCasualties: 2,
			dayOfWar: 3,
			totalEnlistments: 4,
		}),
		{
			casualties: {
				[Team.Colonials]: 1,
				[Team.Wardens]: 2,
			},
			dayOfWar: 3,
			totalEnlistments: 4,
		},
	);
});
