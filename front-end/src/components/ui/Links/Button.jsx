import StyleSheet from './Button.module.css';

// variant может быть 'orange', 'yellow', 'black'
const Button = ({ text, variant = 'orange', onClick }) => {
  return (
    <button 
      className={`${StyleSheet.button} ${StyleSheet[variant]}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;