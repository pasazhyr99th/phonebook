import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ListContainer,
  ListItem,
  ListDeleteBtn,
  EmptyList,
} from './ContactList.styled';
import { fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import Loader from 'components/Loader';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListContainer>
      {isLoading && !error ? (
        <Loader />
      ) : visibleContacts.length === 0 && !error ? (
        <EmptyList>Your Phonebook is empty. Enter new contacts</EmptyList>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
            <ListDeleteBtn onClick={() => handleDelete(id)}>
              Delete
            </ListDeleteBtn>
          </ListItem>
        ))
      )}
    </ListContainer>
  );
};

export default ContactList;
