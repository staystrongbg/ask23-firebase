import { Button, Paw } from '../';

import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';

import styles from '../../styles/pitajte.module.scss';

const Pitajte = () => {
  const router = useRouter();

  return (
    <div className={styles['pitajte']}>
      <h2>Поставите нам питање</h2>
      <Paw style='m-auto' />

      <form
        method='POST'
        action='https://formsubmit.co/beograd.l@yandex.com'
        className={styles['form']}
      >
        <input type='hidden' value='table' name='_template' />
        <input type='hidden' name='_next' value='https://ask23.rs' />

        <TextField label='Име' variant='outlined' name='ime' required />
        <TextField label='email' variant='outlined' name='email' required />

        <TextField
          id='filled-textarea'
          label='Питање'
          multiline
          name='pitanje'
          rows={10}
          variant='outlined'
          required
        />
        <Button title='пошаљи' type='submit' />
      </form>
    </div>
  );
};

export default Pitajte;
