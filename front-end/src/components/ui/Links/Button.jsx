import StyleSheet from './Button.module.css';

// variant может быть 'orange', 'yellow', 'black'
const Button = ({ 
  text, 
  variant = 'orange', 
  onClick, 
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type} 
      className={
        `${StyleSheet.button} ${StyleSheet[variant]} ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;