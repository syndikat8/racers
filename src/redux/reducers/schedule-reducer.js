import {scheduleApi} from '../../api/api';
import {getScheduleSuccess, toggleIsLoading} from '../actions/actions';
import {GET_SCHEDULE} from '../constants/constants';

const initialState = {
  schedule: [],
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE: {
      return {
        ...state,
        schedule: action.schedule,
      };
    }

    default:
      return state;
  }
};

export const getSchedule = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));

  try {
    const response = await scheduleApi.getSchedule();
    dispatch(getScheduleSuccess(response.data.MRData.RaceTable.Races));
  } catch (err) {
    throw new Error(err);
  }

  dispatch(toggleIsLoading(false));
};

export default schedule;
