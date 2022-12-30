import * as React from "react";
import { Button } from "../components/buttons/Button";
import { Container } from "../components/Container";
import { Address } from "../components/details/Address";
import { Attraction } from "../components/details/Attraction";

export const DetailsPage = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-6 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Details
        </h1>
      </div>
      <Container>
        <div className="mb-12">
          <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
            <h2 className="max-w-xl mt-6 mx-auto text-5xl">
              Weekend Festivities
            </h2>
            <h3 className="max-w-xl mt-12 mx-auto text-3xl">
              Friday, June 23, 2023
            </h3>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              8:00pm - Welcome Cocktail Party
            </p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">Radiant Room</p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">The Ritz Carlton</p>
            <Address
              street="1515 W 3rd Street"
              city="Cleveland, OH"
              zip="44113"
            />
            <h3 className="max-w-xl mt-12 mx-auto text-3xl">
              Saturday, June 24, 2023
            </h3>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              5:00pm - Wedding Ceremony
            </p>
            <p className="max-w-xl mt-2 mx-auto text-xl italic">
              Cocktails, dinner, and dancing to follow
            </p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">The Shoreby Club</p>
            <Address
              street="40 Shoreby Drive"
              city="Bratenahl, OH"
              zip="44108"
            />
            <div className="mt-12">
              <Button
                text="Import to your calendar"
                onClick={() =>
                  window.open("/Megan & Grant's Wedding.ics", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
          <h2 className="max-w-xl mt-20 mx-auto text-5xl">Things To Do</h2>
          <h3 className="max-w-xl mt-12 mx-auto text-4xl">
            Recommended Dining:
          </h3>
          <Attraction
            url="https://gomarestaurant.com/"
            name="Goma"
            description="Japanese, Sushi, Izayaka"
            address={{
              street: "1515 W 3rd Street",
              city: "Cleveland, OH",
              zip: "44113",
            }}
          />
          <Attraction
            url="https://www.marbleroomcle.com/"
            name="The Marble Room"
            description="Steaks, Chops, Sushi"
            address={{
              street: "623 Euclid Ave",
              city: "Cleveland, OH",
              zip: "44114",
            }}
          />
          <Attraction
            url="https://www.valeriosristorante.com/"
            name="Valerio's"
            description="Italian, Pasta, Steaks"
            address={{
              street: "12405 Mayfield Rd",
              city: "Cleveland, OH",
              zip: "44106",
            }}
          />
          <Attraction
            url="https://danteboccuzzi.com/ginko-restaurant/"
            name="Ginko"
            description="Japanese, Sushi, Omakase"
            address={{
              street: "2247 Professor Ave B",
              city: "Cleveland, OH",
              zip: "44113",
            }}
          />
          <Attraction
            url="https://mytaza.com/"
            name="Taza"
            description="Lebanese, Mediterranean"
            address={{
              street: "1400 W 6th St",
              city: "Cleveland, OH",
              zip: "44113",
            }}
          />
          <h3 className="max-w-xl mt-16 mx-auto text-4xl">Fun Activities:</h3>
          <Attraction
            url="https://www.rockhall.com/"
            name="Rock & Roll Hall of Fame"
            img="/images/rock_and_roll_hall_of_fame.webp"
            description="Famous museum memorializing rockstars such as Elvis Presley, Dolly Parton, and The Beatles."
            address={{
              street: "1100 E 9th St",
              city: "Cleveland, OH",
              zip: "44114",
            }}
          />
          <Attraction
            url="https://www.greatlakesbrewing.com/"
            name="Great Lakes Brewing"
            img="/images/great_lakes_brewing.webp"
            description="Local brewery and brewpub located in Cleveland's West Side."
            address={{
              street: "623 Euclid Ave",
              city: "Cleveland, OH",
              zip: "44114",
            }}
          />
          <Attraction
            url="https://www.clevelandmetroparks.com/parks/visit/parks/lakefront-reservation/edgewater-beach"
            name="Edgewater Beach"
            img="/images/edgewater_beach.webp"
            description="Lakefront beach in downtown Cleveland. This is a Winston favorite (dog friendly)!"
            address={{
              street: "Edgewater Beach",
              city: "Cleveland, OH",
              zip: "44102",
            }}
          />
          <Attraction
            url="https://westsidemarket.org/"
            name="Westside Market"
            img="/images/westside_market.webp"
            description="Historic indoor/outdoor market with great food & drink."
            address={{
              street: "1979 W 25th St",
              city: "Cleveland, OH",
              zip: "44113",
            }}
          />
          <Attraction
            url="https://www.clevelandart.org/"
            name="The Cleveland Museum of Art"
            img="/images/cleveland_museum_of_art.webp"
            description="World renowned art museum (free admission)."
            address={{
              street: "11150 East Blvd",
              city: "Cleveland, OH",
              zip: "44106",
            }}
          />
          <Attraction
            url="https://clevelandculturalgardens.org/"
            name="Cleveland Cultural Gardens"
            img="/images/cleveland_cultural_gardens.webp"
            description="A collection of public gardens located in Rockefeller Park. We took some of our engagement photos in the Italian gardens."
            address={{
              street: "10823 Magnolia Dr",
              city: "Cleveland, OH",
              zip: "44106",
            }}
          />
          <Attraction
            url="https://www.stanhywet.org/"
            name="Stan Hywet Hall & Gardens"
            img="/images/stan_hywet_hall_gardens.webp"
            description="Historic National Landmark; the mansion once home to F.A. Seiberling, co-founder of Goodyear Tire Company."
            subtext="Note: This is approx. a 40 minute drive from downtown Cleveland."
            address={{
              street: "714 N Portage Path",
              city: "Akron, OH",
              zip: "44303",
            }}
          />
        </div>
      </Container>
    </>
  );
};
