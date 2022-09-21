import styles from '../../styles/button.module.scss';

const Button = ({ title, type = 'button', className, onClick = null }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      <span>{title} </span>
    </button>
  );
};

export default Button;
