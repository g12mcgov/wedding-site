import { Image } from "../photos/Image";

interface Props {
  image: string;
  overlay?: JSX.Element;
  url: string;
  clickable?: boolean;
}

export const RegistryItem = (props: Props): JSX.Element => {
  const { image, overlay, url, clickable = true } = props;

  return (
    <div className="m-auto mt-8 h-[400px] sm:w-full md:w-[400px] font-cormorant-garamond text-[#a0bbd3]">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`${clickable ? "" : "pointer-events-none"}`}
      >
        <Image
          height="h-[400px]"
          image={image}
          showCarousel={false}
          brightness="brightness-50"
          className="absolute"
          overlay={overlay}
        />
      </a>
    </div>
  );
};
