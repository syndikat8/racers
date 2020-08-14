import {scheduleApi} from '../api/api';
import {toggleIsLoading} from './racers-reducer';

const GET_SCHEDULE = 'racers/racers/GET_SCHEDULE';

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

const getScheduleSuccess = (schedule) => ({
  type: GET_SCHEDULE,
  schedule,
});

export const getSchedule = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));

  try {
    const response = await scheduleApi.getSchedule();
    dispatch(getScheduleSuccess(response.data.MRData.RaceTable.Races));
  } catch (err) {
    alert(err);
  }

  dispatch(toggleIsLoading(false));
};

export default schedule;
