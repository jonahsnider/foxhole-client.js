import test from 'ava';
import * as Adapters from '../../../../src/adapters/index.js';
import {Api, Team} from '../../../../src/index.js';

test('deserializes', t => {
	t.deepEqual(
		Adapters.Map.data.deserialize({
			lastUpdated: 1,
			mapItems: [
				{
					// eslint-disable-next-line no-bitwise
					flags: Api.Map.Flags.IsBuildSite | Api.Map.Flags.IsScorched,
					iconType: Api.Map.Icon.RocketSite,
					teamId: Api.Team.Colonials,
					x: 2,
					y: 3,
				},
			],
			mapTextItems: [
				{
					mapMarkerType: Api.Map.MarkerType.Major,
					text: 'text',
					x: 4,
					y: 5,
				},
			],
			regionId: 6,
			scorchedVictoryTowns: 7,
			version: 8,
		}),
		{
			lastUpdated: new Date(1),
			items: [
				{
					flags: {
						isBuildSite: true,
						isLaunchedRocketSite: true,
						isScorched: true,
						isTownClaimed: false,
						isVictoryBase: false,
						isHomeBase: false,
					},
					icon: Api.Map.Icon.RocketSite,
					team: Team.Colonials,
					coordinates: {x: 2, y: 3},
				},
			],
			textItems: [
				{
					mapMarkerType: Api.Map.MarkerType.Major,
					text: 'text',
					coordinates: {x: 4, y: 5},
				},
			],
			regionId: 6,
			scorchedVictoryTownCount: 7,
			version: 8,
		},
	);
});
