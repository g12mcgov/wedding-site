import { Avatar } from "./Avatar";
import { Container } from "./Container";

const groomsmen = [
  {
    name: "Jonathan Friedman",
    image: "/images/groomsmen/jon.jpeg",
    subname: "(Best Man)",
  },
  {
    name: "Phillip Werner",
    image: "/images/groomsmen/phil.jpeg",
  },
  {
    name: "Gaurav Sheni",
    image: "/images/groomsmen/gaurav.jpeg",
  },
  {
    name: "Smith Collett",
    image: "/images/groomsmen/smith.jpeg",
  },
  {
    name: "Bradley Naumann",
    image: "/images/groomsmen/brad.jpeg",
  },
  {
    name: "George Schmitz",
    image: "/images/groomsmen/george.jpeg",
  },
];

const bridesmaids = [
  {
    name: "Payton Donnan",
    image: "/images/bridesmaids/payton.jpeg",
  },
  {
    name: "Kirsten Donnan",
    image: "/images/bridesmaids/kirsten.png",
  },
  {
    name: "Meghan McGovern",
    image: "/images/bridesmaids/meghan.jpeg",
  },
  {
    name: "Ellen Carey",
    image: "/images/bridesmaids/ellen.jpeg",
  },
  {
    name: "Samantha Boures",
    image: "/images/bridesmaids/sam.jpeg",
  },
  {
    name: "Emily Kolilias",
    image: "/images/bridesmaids/emily.jpeg",
  },
];

export const WeddingParty = (): JSX.Element => {
  return (
    <Container>
      <>
        <div className="text-center">
          <h1 className="my-20 mt-1 text-6xl font-square-peg sm:text-6xl sm:tracking-tight lg:text-9xl">
            The Wedding Party
          </h1>
        </div>
        <div className="sm:flex flex-col justify-center items-center">
          <div className="w-500">
            <div className="hidden md:flex justify-between text-4xl">
              <h2 className="font-square-peg">Bridemaids</h2>
              <h2 className="font-square-peg">Groomsmen</h2>
            </div>
            {groomsmen.map((groomsman, i) => (
              <div className="sm:flex gap-40">
                <Avatar
                  name={bridesmaids[i].name}
                  image={bridesmaids[i].image}
                />
                <Avatar name={groomsman.name} image={groomsman.image} />
              </div>
            ))}
          </div>
        </div>
      </>
    </Container>
  );
};
