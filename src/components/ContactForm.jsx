import {useDispatch} from 'react-redux'
import { addContact } from '../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import styles from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
    name: "",
    number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();
  
    const handleSubmit = (values, actions) => {
        dispatch(addContact({...values, id: nanoid()}));
        actions.resetForm();
      };

    return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor={nameFieldId}>Name</label>
          <Field className={styles.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor={numberFieldId}>Number</label>
          <Field className={styles.input} type="number" name="number" id={numberFieldId} />
          <ErrorMessage className={styles.error} name="number" component="span" />
        </div>

        <button className={styles.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
