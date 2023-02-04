import { useState } from "react";
import useLongPress from "../hooks/useLongPress";
import { Avatar, Props as AvatarProps } from "./Avatar";
import { Container } from "./Container";

interface ImageConfig {
  name: string;
  image: string;
  secondaryImage?: string;
  subname?: string;
}

const groomsmen: Array<ImageConfig> = [
  {
    name: "Jonathan Friedman",
    image: "/images/groomsmen/jon.webp",
    secondaryImage:
      "/images/groomsmen/7f3d21c2-a499-11ed-bc4e-a3190125c6c9.gif",
    subname: "Best Man",
  },
  {
    name: "Philipp Werner",
    image: "/images/groomsmen/phil.webp",
    secondaryImage:
      "/images/groomsmen/6da581a2-9a9e-11ed-b534-b394998df227.gif",
  },
  {
    name: "Gaurav Sheni",
    image: "/images/groomsmen/gaurav.webp",
  },
  {
    name: "Smith Collett",
    image: "/images/groomsmen/smith.webp",
    secondaryImage:
      "/images/groomsmen/67e2fc12-a49a-11ed-864b-b39cefbdc0d5.gif",
  },
  {
    name: "Bradley Naumann",
    image: "/images/groomsmen/brad.webp",
    secondaryImage:
      "/images/groomsmen/0e857c36-9a9e-11ed-876e-afe0bf38d4f2.gif",
  },
  {
    name: "George Schmitz",
    image: "/images/groomsmen/george.webp",
    secondaryImage:
      "/images/groomsmen/463b98c2-9a9e-11ed-8d0c-ffd6c0d870cb.gif",
  },
];

const bridesmaids: Array<ImageConfig> = [
  {
    name: "Payton Donnan",
    image: "/images/bridesmaids/payton.webp",
    subname: "Maid of Honor",
  },
  {
    name: "Kirsten Donnan",
    image: "/images/bridesmaids/kirsten.webp",
    subname: "Matron of Honor",
  },
  {
    name: "Meghan McGovern",
    image: "/images/bridesmaids/meghan.webp",
  },
  {
    name: "Ellen Carey",
    image: "/images/bridesmaids/ellen.webp",
  },
  {
    name: "Samantha Boures",
    image: "/images/bridesmaids/sam.webp",
  },
  {
    name: "Emily Kolilias",
    image: "/images/bridesmaids/emily.webp",
  },
];

interface WrappedAvatorProps extends AvatarProps {
  secondaryImage?: string;
}

const WrappedAvator = (props: WrappedAvatorProps): JSX.Element => {
  const [image, setImage] = useState<string>(props.image);
  const longPress = useLongPress({
    onStart: () => setImage(props.secondaryImage),
    onEnd: () => setImage(props.image),
    ms: 1000,
  });

  return (
    <Avatar
      name={props.name}
      image={image}
      subname={props.subname}
      longPress={props.secondaryImage ? longPress : undefined}
    />
  );
};

export const WeddingParty = (): JSX.Element => {
  return (
    <Container>
      <div className="px-4 text-[#a0bbd3] font-cormorant-garamond">
        <div className="text-center">
          <h1 className="my-20 mt-1 text-6xl sm:text-7xl sm:tracking-tight">
            The Wedding Party
          </h1>
        </div>
        <div className="sm:flex flex-col justify-center items-center">
          <div className="gap-60 hidden sm:flex justify-between text-4xl">
            <div className="w-24 text-center flex justify-center">
              <h2>Bridesmaids</h2>
            </div>
            <div className="w-24 text-center flex justify-center">
              <h2>Groomsmen</h2>
            </div>
          </div>
          {groomsmen.map((groomsman, i) => (
            <div className="sm:flex gap-60">
              <WrappedAvator
                image={bridesmaids[i].image}
                name={bridesmaids[i].name}
                subname={bridesmaids[i].subname}
                secondaryImage={bridesmaids[i].secondaryImage}
              />
              <WrappedAvator
                image={groomsman.image}
                name={groomsman.name}
                subname={groomsman.subname}
                secondaryImage={groomsman.secondaryImage}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
