import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsView = () => (
  <>
    <h2>Your contacts</h2>
    <ContactForm />
    <Filter />
    <ContactList />
  </>
);

export default ContactsView;
