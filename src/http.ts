import * as ky from 'ky-universal';

const apiUrl = 'https://war-service-live.foxholeservices.com/api';

export const http = ky.create({prefixUrl: apiUrl});
