import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const handleChangeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contact by name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        disabled={contacts.length === 0}
      />
    </FilterLabel>
  );
};

export default Filter;
