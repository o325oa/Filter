import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startEditItem, deleteItem } from './actions';
import { FaEdit } from 'react-icons/fa';

export default function ItemList() {
  const items = useSelector((state) => state.items);
  const filterText = useSelector((state) => state.filterText).toLowerCase();
  const dispatch = useDispatch();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filterText)
  );

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          {item.name}: {item.value}
          <button
            onClick={() => dispatch(startEditItem(item))}
            aria-label="Редактировать"
            title="Редактировать"
          >
            <FaEdit />
          </button>
          <button onClick={() => dispatch(deleteItem(item.id))} aria-label="Удалить" title="Удалить">
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}