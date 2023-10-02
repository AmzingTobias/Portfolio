import Image from "next/image";

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
      <Image src={image_src} alt={image_alt} width={756} height={756} />
    </div>
  );
};

export default RoundedImage;
