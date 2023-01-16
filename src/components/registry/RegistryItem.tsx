import { Image } from "../photos/Image";

interface Props {
  image: string;
  overlay?: JSX.Element;
  url: string;
}

export const RegistryItem = (props: Props): JSX.Element => {
  const { image, overlay, url } = props;

  return (
    <div className="m-auto mt-8 h-[400px] w-[400px] font-cormorant-garamond text-[#a0bbd3]">
      <a href={url} target="_blank" rel="noreferrer">
        <Image
          height="400px"
          image={image}
          showCarousel={false}
          brightness={50}
          className="absolute"
          overlay={overlay}
        />
      </a>
    </div>
  );
};
