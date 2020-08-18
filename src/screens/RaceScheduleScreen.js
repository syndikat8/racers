import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../components/common/Preloader/Preloader';
import Race from '../components/Schedule/Race/Race';
import HeaderSchedule from '../components/Schedule/HeaderSchedule/HeaderSchedule';
import {getSchedule} from '../redux/reducers/schedule-reducer';

const RaceScheduleScreen = () => {
  const dispatch = useDispatch();
  const {schedule} = useSelector((store) => store.schedule);
  const {isLoading} = useSelector((store) => store.drivers);

  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  return (
    <View>
      {isLoading
        ? <Preloader/>
        : <FlatList
          keyExtractor={(item) => item.raceName}
          data={schedule}
          renderItem={({item}) => <Race race={item}/>}
          ListHeaderComponent={<HeaderSchedule/>}
        />
      }
    </View>
  );
};

export default RaceScheduleScreen;
