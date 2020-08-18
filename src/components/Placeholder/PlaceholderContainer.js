import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Placeholder from './Placeholder';
import {getDrivers} from '../../redux/reducers/drivers-reducer';

const PlaceholderContainer = () => {
  const dispatch = useDispatch();
  const {currenOffset, limit, total} = useSelector((store) => store.drivers);

  const onPressDown = () => {
    const offset = currenOffset - limit;
    dispatch(getDrivers(offset));
  };

  const onPressUp = () => {
    const offset = limit + currenOffset;
    dispatch(getDrivers(offset));
  };

  return (
    <Placeholder
      total={total}
      currenOffset={currenOffset}
      limit={limit}
      onPressDown={onPressDown}
      onPressUp={onPressUp}
    />
  );
};

export default PlaceholderContainer;
