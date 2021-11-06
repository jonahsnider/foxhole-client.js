import Foxhole from './tsc_output/src/index.js';

const foxhole = new Foxhole();

const names = await foxhole.map.fetchMapNames();

const data = await foxhole.map.fetchDynamicPublicData(names[0]);

console.log(data);
