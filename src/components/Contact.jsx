import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import styles from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <p className={styles.name}>👤 {name}</p>
        <p className={styles.number}>📞 {number}</p>
      </div>
      <button className={styles.button} onClick={handleDelete}>Delete</button>
    </li>
  );
}
