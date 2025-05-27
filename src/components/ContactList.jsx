import { useSelector } from 'react-redux';
import Contact from './Contact'
import styles from './ContactList.module.css';
import { getContacts, getFilterName } from '../redux/selectors';

function getVisibleContacts(contacts, filterName) {
    return contacts.filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase()))
}

export default function ContactList() {
    const contacts = useSelector(getContacts)
    const filterName = useSelector(getFilterName)

    const visibleContacts = getVisibleContacts(contacts, filterName)

    return (<ul className={styles.list}>
            {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
    ))}
    </ul>)

}