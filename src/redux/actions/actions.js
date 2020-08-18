import {
  GET_DRIVER,
  GET_SCHEDULE,
  GET_DRIVERS,
  IS_LOADING,
} from '../constants/constants';

export const getDriverSuccess = (driver) => ({type: GET_DRIVER, driver});
export const getDriversSuccess = (drivers, total, currenOffset) => ({
  type: GET_DRIVERS,
  drivers,
  total,
  currenOffset,
});
export const toggleIsLoading = (isLoading) => ({type: IS_LOADING, isLoading});
export const getScheduleSuccess = (schedule) => ({
  type: GET_SCHEDULE,
  schedule,
});
