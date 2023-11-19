import { PulseLoader } from 'react-spinners'
import styles from './UI.module.css';

const Loader = () => {
  return (
    <div className={styles.loading}>
       <PulseLoader size={12} color="grey"/>
    </div>
  )
}

export default Loader