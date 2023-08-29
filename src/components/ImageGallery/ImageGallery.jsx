/* eslint-disable react/prop-types */
import "./ImageGallery.css";

const ImageGallery = ({images}) => {
  let data=images.filter(img=> img.image?.url!=null)
  return (
    <div className='imgGrid'>
      {data.map(({id, cfa_url}) => (
        <img className="im" key={id} src={cfa_url} alt={`Image ${id}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
