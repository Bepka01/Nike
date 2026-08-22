import Typography from '../ui/Typography';
import style from './style.module.scss';

const BreadCrumbs = ({ items }) => {
  return (
    <div className={style.breadcrumbs}>
      {items.map((item, index) => (
        <Typography variant="small-text" key={item}>
          {item}
          {index < items.length - 1 && ' / '}
        </Typography>
      ))}
    </div>
  );
};

export default BreadCrumbs;
