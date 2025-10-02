import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateItem, cancelEditItem } from './actions';
import { FaEdit } from 'react-icons/fa';

export default function ItemForm() {
  const editItem = useSelector(state => state.editItem);
  const dispatch = useDispatch();

  const [values, setValues] = useState({ name: '', value: '' });

  useEffect(() => {
    if (editItem) setValues(editItem);
    else setValues({ name: '', value: '' });
  }, [editItem]);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSave = e => {
    e.preventDefault();
    if (values.name === '' || values.value === '') return;
    if (editItem) {
      dispatch(updateItem(values));
    } else {
      dispatch(addItem({ ...values, id: Date.now() }));
    }
    setValues({ name: '', value: '' });
  };

  const handleCancel = () => {
    dispatch(cancelEditItem());
  };

  return (
    <form onSubmit={handleSave}>
      <input name="name" value={values.name} onChange={handleChange} />
      <input name="value" value={values.value} onChange={handleChange} />
      <button type="submit">Save</button>
      {editItem && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  );
}