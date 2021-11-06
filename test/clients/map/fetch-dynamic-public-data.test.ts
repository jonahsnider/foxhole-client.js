import test from 'ava';
import nock from 'nock';
import {Api, Client, Team} from '../../../src/index.js';

test.after.always(() => {
	nock.cleanAll();
});

test('fetches dynamic public data', async t => {
	const apiBody: Api.Map.Data = {
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
	};

	const scope = nock('http://localhost').get('/worldconquest/maps/map-name/dynamic/public').reply(200, apiBody);

	const client = new Client('http://localhost');

	const staticData = await client.map.fetchDynamicPublicData('map-name');

	t.true(scope.isDone());

	t.deepEqual(staticData, {
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
	});
});
