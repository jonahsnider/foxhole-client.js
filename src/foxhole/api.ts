import {Uuid} from '../common';

export enum Team {
	None = 'NONE',
	Colonials = 'COLONIALS',
	Wardens = 'WARDENS'
}

export interface War {
	warId: Uuid;
	warNumber: number;
	winner: Team;
	conquestStartTime: number;
	conquestEndTime: number | null;
	resistanceStartTime: number | null;
	requiredVictoryTowns: number;
}

export interface MapWarReport {
	totalEnlistments: number;
	colonialCasualties: number;
	wardenCasualties: number;
	dayOfWar: number;
}

export enum MapIcon {
	StaticBase1 = 5,
	StaticBase2 = 6,
	StaticBase3 = 7,

	ForwardBase1 = 8,
	ForwardBase2 = 9,
	ForwardBase3 = 10,

	Hospital = 11,
	VehicleFactory = 12,
	Armory = 13,
	/** Supply Station */
	SupplyStation = 14,
	Workshop = 15,
	/** Manufacturing Plant */
	ManufacturingPlant = 16,
	Refinery = 17,
	Shipyard = 18,
	/** Tech Center (Engineering Center in v0.37) */
	TechCenter = 19,

	/** Salvage Field */
	SalvageField = 20,
	/** Component Field */
	ComponentField = 21,
	/** Fuel Field */
	FuelField = 22,
	/** Sulfur Field */
	SulfurField = 23,
	/** World Map Tent */
	WorldMapTent = 24,
	/** Travel Tent */
	TravelTent = 25,
	/** Training Area */
	TrainingArea = 26,
	/** Special Base (Keep) */
	SpecialBaseKeep = 27,
	/** Observation Tower */
	ObservationTower = 28,
	Fort = 29,
	/** Troop Ship */
	TroopShip = 30,
	/** Sulfur Mine */
	SulfurMine = 32,
	/** Storage Facility */
	StorageFacility = 33,
	Factory = 34,
	/** Garrison Station */
	GarrisonStation = 35,
	/** Ammo Factory */
	AmmoFactory = 36,
	/** Rocket Site */
	RocketSite = 37,
	/** Salvage Mine */
	SalvageMine = 38,
	/** Construction Yard */
	ConstructionYard = 39,
	/** Component Mine */
	ComponentMine = 40,
	/** Oil Well */
	OilWell = 41,

	/** Relic Base 1 */
	RelicBase1 = 45,
	/** Relic Base 2 */
	RelicBase2 = 46,
	/** Relic Base 3 */
	RelicBase3 = 47,

	/** Mass Production Factory */
	MassProductionFactory = 51,
	Seaport = 52,
	CoastalGun = 53,
	SoulFactory = 54
}

export enum MapFlags {
	IsVictoryBase = 0x01,
	/** @deprecated */
	IsHomeBase = 0x02,
	IsBuildSite = 0x04,
	IsScorched = 0x10,
	IsTownClaimed = 0x20
}

export enum MapMarkerType {
	Major = 'Major',
	Minor = 'Minor'
}

export interface MapData {
	regionId: number;
	scorchedVictoryTowns: number;
	mapItems: Array<{
		teamId: Team;
		iconType: MapIcon;
		x: number;
		y: number;
		flags: number | MapFlags;
	}>;
	mapTextItems: Array<{
		text: string;
		x: number;
		y: number;
		mapMarkerType: MapMarkerType;
	}>;
	lastUpdated: number;
	version: number;
}
