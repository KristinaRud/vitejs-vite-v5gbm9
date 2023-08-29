import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCats } from "../../store/selectors/cats.selector";
import { fetchCats } from "../../store/actionCreator/cats.actionCreator";
import Wrapper from "../../components/Wrapper/Wrapper";
import Filters from "../../components/Filters/Filters";
import './Breeds.css';
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const Breeds = () => {
  const cats = useSelector(selectCats);
  const dispatch = useDispatch();
  // const [productsCategory, setProductsCategory] = useState([]);
  useEffect(() => {
    dispatch(fetchCats(""));
  }, [dispatch]);
    console.log(cats);
  return (
    <>
    <Filters/>
    <Wrapper className="wrapper-content white-bg">Breeds
    <ImageGallery images={cats}/>
    </Wrapper>
    </>
  );
};

export default Breeds;
