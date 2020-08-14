import {racersApi} from '../api/api';

const GET_DRIVERS = 'racers/racers/GET_DRIVERS';
const GET_DRIVER = 'racers/racers/GET_DRIVER';
const IS_LOADING = 'racers/racers/IS_LOADING';

const initialState = {
  drivers: [],
  driver: [],
  offset: 15,
  currenPage: 0,
  total: 0,
  isLoading: true,
};

const racers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS: {
      return {
        ...state,
        drivers: action.drivers,
        currenPage: action.page,
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

const getDriversSuccess = (drivers, total, page) => ({
  type: GET_DRIVERS,
  drivers,
  total,
  page,
});

const getDriverSuccess = (driver) => ({
  type: GET_DRIVER,
  driver,
});

export const toggleIsLoading = (isLoading) => ({type: IS_LOADING, isLoading});

export const getDrivers = (page) => async (dispatch) => {
  dispatch(toggleIsLoading(true));

  try {
    const response = await racersApi.getRacers(page);
    dispatch(
      getDriversSuccess(
        response.data.MRData.DriverTable.Drivers,
        response.data.MRData.total,
        page,
      ),
    );
  } catch (err) {
    alert(err);
  }

  dispatch(toggleIsLoading(false));
};

export const getDriver = (id) => async (dispatch) => {
  dispatch(toggleIsLoading(true));

  try {
    const response = await racersApi.getRacer(id);
    dispatch(getDriverSuccess(response.data.MRData.DriverTable.Drivers));
  } catch (err) {
    alert(err);
  }

  dispatch(toggleIsLoading(false));
};

export default racers;
