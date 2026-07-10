import glass from '../../../assets/icons/glass.svg';
import trash from '../../../assets/icons/trash (2).svg';
import arrow from '../../../assets/icons/arrow.svg';
import vk from '../../../assets/icons/vk.svg';
import inst from '../../../assets/icons/instagram.svg';
import faceBook from '../../../assets/icons/facebook 1 (1).svg';

const icons = { glass, trash, arrow, vk, inst, faceBook };

const Icon = ({ name, alt = '', ...props }) => {
  return <img src={icons[name]} alt={alt} {...props} />;
};

export default Icon;
