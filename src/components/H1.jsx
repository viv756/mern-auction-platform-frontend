const H1 = ({ style, children, className = "" }) => {
  return (
    <h1
      style={style}
      className={`text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary ${className}`}>
      {children}
    </h1>
  );
};

export default H1;
