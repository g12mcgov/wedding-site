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
    subname: "(Best Man)",
  },
  {
    name: "Philipp Werner",
    image: "/images/groomsmen/phil.jpeg",
    secondaryImage: "https://www.dropbox.com/s/h13elog732kgae3/phil.gif?raw=1",
  },
  {
    name: "Gaurav Sheni",
    image: "/images/groomsmen/gaurav.webp",
  },
  {
    name: "Smith Collett",
    image: "/images/groomsmen/smith.webp",
  },
  {
    name: "Bradley Naumann",
    image: "/images/groomsmen/brad.webp",
    secondaryImage: "https://www.dropbox.com/s/54itgnl2zcgw9gw/brad.gif?raw=1",
  },
  {
    name: "George Schmitz",
    image: "/images/groomsmen/george.webp",
    secondaryImage:
      "https://www.dropbox.com/s/ltaaqqlpg77y9y6/george.gif?raw=1",
  },
];

const bridesmaids: Array<ImageConfig> = [
  {
    name: "Payton Donnan",
    image: "/images/bridesmaids/payton.webp",
  },
  {
    name: "Kirsten Donnan",
    image: "/images/bridesmaids/kirsten.webp",
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
                name={bridesmaids[i].name}
                image={bridesmaids[i].image}
                secondaryImage={bridesmaids[i].secondaryImage}
              />
              <WrappedAvator
                name={groomsman.name}
                image={groomsman.image}
                secondaryImage={groomsman.secondaryImage}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
