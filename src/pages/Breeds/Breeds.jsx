import Wrapper from "../../components/Wrapper/Wrapper";
import Filters from "../../components/Filters/Filters";
import './Breeds.css';

const Breeds = () => {
    console.log("wrapper-content");
  return (
    <>
    <Filters/>
    <Wrapper className="wrapper-content white-bg">Breeds</Wrapper>
    </>
  );
};

export default Breeds;
