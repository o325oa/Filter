import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './actions';

export default function Filter() {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.filterText);

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Фильтр по названию"
      value={filterText}
      onChange={onChange}
    />
  );
}