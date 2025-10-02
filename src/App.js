import React from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import Filter from './Filter';

export default function App() {
  return (
    <div>
      <Filter />
      <ItemForm />
      <ItemList />
    </div>
  );
};
