import styles from './Typography.module.scss';

const Typography = ({ tag: Tag = 'p', className, children }) => {
  return <Tag className={`${styles.typography} ${className}`}>{children}</Tag>;
};

export default Typography;
