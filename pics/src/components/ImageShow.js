const ImageShow = ({ image }) => {
  console.log(image.links);
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
