import StyleSheet from './TextLink.module.css';

const TextLink = ({ text, href = "#" }) => {
  return (
    <a href={href} className={StyleSheet.link}>
      {text}
      <span className={StyleSheet.icon}>&gt;</span>
    </a>
  );
};

export default TextLink;