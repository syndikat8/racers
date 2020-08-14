import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDrivers} from '../../redux/racers-reducer';
import Placeholder from './Placeholder';

const PlaceholderContainer = () => {
  const dispatch = useDispatch();
  const {currenPage, offset, total} = useSelector((store) => store.racers);

  const onPressDown = () => {
    const page = currenPage - offset;
    dispatch(getDrivers(page));
  };

  const onPressUp = () => {
    const page = offset + currenPage;
    dispatch(getDrivers(page));
  };

  return (
    <Placeholder
      total={total}
      currenPage={currenPage}
      offset={offset}
      onPressDown={onPressDown}
      onPressUp={onPressUp}
    />
  );
};

export default PlaceholderContainer;
