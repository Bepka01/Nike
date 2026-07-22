import Glass from '../../../assets/icons/glass.svg?react';
import Trash from '../../../assets/icons/trash.svg?react';
import Arrow from '../../../assets/icons/arrow.svg?react';
import Vk from '../../../assets/icons/vk.svg?react';
import Inst from '../../../assets/icons/instagram.svg?react';
import FaceBook from '../../../assets/icons/facebook.svg?react';
import Nike from '../../../assets/icons/logonike.svg?react';
import Burger from '../../../assets/icons/burger.svg?react';
import BurgerClose from '../../../assets/icons/burger-close.svg?react';

const icons = {
  glass: Glass,
  trash: Trash,
  arrow: Arrow,
  vk: Vk,
  inst: Inst,
  facebook: FaceBook,
  nike: Nike,
  burger: Burger,
  burgerClose: BurgerClose,
};

const Icon = ({ name, color = 'black', ...props }) => {
  const ComponentIcon = icons[name];

  if (!ComponentIcon) return null;
  return <ComponentIcon style={{ color }} {...props} />;
};

export default Icon;
