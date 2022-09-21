const Button2 = ({ onClick, title, type, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center uppercase rounded-sm bg-blue-400 hover:bg-blue-300 text-blue-900 transition-all  px-2 py-1 tracking-wider sm:text-base text-sm ${className} `}
    >
      {title}
    </button>
  );
};

export default Button2;
