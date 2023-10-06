import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = () => {
  return (
    <div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faAnglesLeft} />
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        <li>
          <button></button>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleRight} />
          <FontAwesomeIcon icon={faAnglesRight} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
