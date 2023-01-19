import { Avatar } from "./Avatar";
import { Container } from "./Container";

const groomsmen = [
  {
    name: "Jonathan Friedman",
    image: "/images/groomsmen/jon.webp",
    subname: "(Best Man)",
  },
  {
    name: "Philipp Werner",
    image: "/images/groomsmen/phil.webp",
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
  },
  {
    name: "George Schmitz",
    image: "/images/groomsmen/george.webp",
  },
];

const bridesmaids = [
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
              <Avatar name={bridesmaids[i].name} image={bridesmaids[i].image} />
              <Avatar name={groomsman.name} image={groomsman.image} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
