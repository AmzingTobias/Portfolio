interface RoundedImageProps {
  image_src: string;
  image_alt: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  image_src,
  image_alt,
}) => {
  return (
    <div className="w-72 sm:w-80 2xl:w-96 rounded-full overflow-hidden">
      <img src={image_src} alt={image_alt} />
    </div>
  );
};

export default RoundedImage;
