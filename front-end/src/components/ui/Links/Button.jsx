import StyleSheet from './Button.module.css';

const Button = ({ 
  text, 
  bgColor = 'orange', 
  onClick, 
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type} 
      className={
        `${StyleSheet.button} ${StyleSheet[bgColor]} ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;