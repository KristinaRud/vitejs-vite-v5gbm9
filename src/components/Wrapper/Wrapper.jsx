import './Wrapper.css';

// eslint-disable-next-line react/prop-types
const Wrapper = ({className="", children}) => {
  console.log(className);
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default Wrapper;
