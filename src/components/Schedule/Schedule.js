import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import HaderSchedule from './HeaderSchedule/HeaderSchedule';
import {useDispatch, useSelector} from 'react-redux';
import {getSchedule} from '../../redux/schedule-reducer';
import Race from './Race/Race';
import Preloader from '../common/Preloader/Preloader';

const Schedule = ({}) => {
  const dispatch = useDispatch();
  const {schedule} = useSelector((store) => store.schedule);
  const {isLoading} = useSelector((store) => store.racers);

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
          ListHeaderComponent={<HaderSchedule/>}
        />
      }
    </View>
  );
};

export default Schedule;
