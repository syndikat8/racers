import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ergast.com/api/f1',
});

export const racersApi = {
  getRacers(offset) {
    return instance.get(`drivers.json?limit=15&offset=${offset}`);
  },
  getRacer(id) {
    return instance.get(`drivers/${id}.json`);
  },
};

export const scheduleApi = {
  getSchedule() {
    return instance.get('/current.json');
  },
};
