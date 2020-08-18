import {racersApi} from '../../api/api';
import {
  toggleIsLoading,
  getDriverSuccess,
  getDriversSuccess,
} from '../actions/actions';
import {GET_DRIVERS, GET_DRIVER, IS_LOADING} from '../constants/constants';

const initialState = {
  drivers: [],
  driver: [],
  limit: 15,
  currenOffset: 0,
  total: 0,
  isLoading: true,
};

const drivers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS: {
      return {
        ...state,
        drivers: action.drivers,
        currenOffset: action.currenOffset,
        total: action.total,
      };
    }

    case GET_DRIVER: {
      return {
        ...state,
        driver: action.driver,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export const getDrivers = (offset) => async (dispatch) => {
  dispatch(toggleIsLoading(true));

  try {
    const response = await racersApi.getRacers(offset);
    dispatch(
      getDriversSuccess(
        response.data.MRData.DriverTable.Drivers,
        response.data.MRData.total,
        offset,
      ),
    );
  } catch (err) {
    throw new Error(err);
  }

  dispatch(toggleIsLoading(false));
};

export const getDriver = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true));

  try {
    const response = await racersApi.getRacer(id);
    dispatch(getDriverSuccess(response.data.MRData.DriverTable.Drivers));
  } catch (err) {
    throw new Error(err);
  }

  dispatch(toggleIsLoading(false));
};

export default drivers;
