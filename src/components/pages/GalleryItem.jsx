import { useParams } from "react-router-dom";

import GoBackBtn from '../shared/GoBackBtn';

const galleryImgStyles = {
  width: '100%',
  height: '65vh',
  objectFit: 'cover',
  borderRadius: '10px',
  marginTop: '20px'
};

const GalleryItem = () => {
  const galleryData = [
    'https://images.unsplash.com/photo-1663214532892-57aac8c5149f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80',
    'https://images.unsplash.com/photo-1663051346122-73469cc251fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1663186821274-8e2d5e869b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1663174494778-de9911fcd72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1663125406817-932dd8c4e1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1663097518286-aaa8ce7e84e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ];

  const { img } = useParams();

  return (
    <>
      <GoBackBtn />
      <img
        src={galleryData[img]}
        alt="Some image"
        style={galleryImgStyles}
      />
    </>
  )
}

export default GalleryItem