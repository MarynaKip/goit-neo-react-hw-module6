import { useSelector, useDispatch } from 'react-redux';
import { getFilterName } from '../redux/selectors';
import { changeFilter } from '../redux/filtersSlice'

import styles from './SearchBox.module.css';
import { Formik, Field, Form } from 'formik';

export default function SearchBox() {
  const dispatch = useDispatch();

  const filterName = useSelector(getFilterName)
  const handleFilterChange = (name) => dispatch(changeFilter(name))

  return (
    <Formik
      initialValues={{ filterName }}
      enableReinitialize
    >
      {({ values, handleChange }) => (
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="filter">Find Contacts by Name</label>
          <Field
            className={styles.field}
            type="text"
            name="filterName"
            id="filter"
            value={values.filter}
            onChange={(e) => {
              handleChange(e)
              handleFilterChange(e.target.value)
            }}
          />
        </Form>
      )}
    </Formik>
  );
}
