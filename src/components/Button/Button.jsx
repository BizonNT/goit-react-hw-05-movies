import css from './button.module.css';

const Button = ({ onClick, title }) => {
  return (
    <>
      <button onClick={onClick} type="button" className={css.button}>
        {title}
      </button>
    </>
  );
};

export default Button;
