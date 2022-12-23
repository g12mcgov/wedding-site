import * as React from "react";
import { Button } from "../components/buttons/Button";
import { Container } from "../components/Container";

export const GuestAccomodations = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-12 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Guest Accomodations
        </h1>
      </div>
      <Container>
        <>
          <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
            <a
              href="https://www.ritzcarlton.com/en/hotels/cleveland"
              target={"_blank"}
              rel="noreferrer"
            >
              <h2 className="max-w-xl mt-6 mx-auto text-5xl">
                The Ritz Carlton
              </h2>
            </a>
            <p className="max-w-xl mt-6 mx-auto text-3xl">Cleveland, Ohio</p>
            <img
              className="mx-auto my-8 sm:max-w-lg"
              src="/images/hotels/ritz_carlton.webp"
              alt="The Ritz Carlton"
            />
            <p className="max-w-xl mt-5 mx-auto text-2xl">1515 W 3rd Street</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44113</p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              Room Rate: $289/night
            </p>
            <div className="max-w-xl mx-auto mt-8 text-xl">
              To book, please contact Marriott Reservations directly at +1 (800)
              241-3333 and mention the McGovern Donnan wedding for the
              discounted rate.
            </div>
          </div>
          <div className="mt-24 font-cormorant-garamond text-center text-[#a0bbd3]">
            <a
              href="https://www.hyatt.com/en-US/group-booking/CLERC/G-DMWB"
              target={"_blank"}
              rel="noreferrer"
            >
              <h2 className="max-w-xl mt-16 mx-auto text-5xl">
                Hyatt Regency Arcade
              </h2>
            </a>
            <p className="max-w-xl mt-6 mx-auto text-3xl">Cleveland, Ohio</p>
            <img
              className="mx-auto my-8 sm:max-w-lg"
              src="/images/hotels/hyatt_regency.webp"
              alt="The Ritz Carlton"
            />
            <p className="max-w-xl mt-5 mx-auto text-2xl">420 Superior Ave</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44114</p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              Room Rate: $199/night
            </p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              Use group code "G-DMWB" when making a reservation.
            </p>
            <div className="my-12 text-xl">
              <Button
                text="Book a room"
                onClick={() =>
                  window.open(
                    "https://www.hyatt.com/en-US/group-booking/CLERC/G-DMWB",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div className="mt-24 font-cormorant-garamond text-center text-[#a0bbd3]">
            <a
              href="https://www.marriott.com/en-us/hotels/clewi-the-westin-cleveland-downtown/overview/"
              target={"_blank"}
              rel="noreferrer"
            >
              <h2 className="max-w-xl mt-6 mx-auto text-5xl">
                The Westin Cleveland Downtown
              </h2>
            </a>
            <p className="max-w-xl mt-6 mx-auto text-3xl">Cleveland, Ohio</p>
            <img
              className="mx-auto my-8 sm:max-w-lg"
              src="/images/hotels/westin.webp"
              alt="The Ritz Carlton"
            />
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              777 St Clair Ave NE
            </p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44114</p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              Room Rate: $219/night
            </p>
            <div className="max-w-xl mx-auto mt-8 text-xl">
              To book, please contact the Westin directly at +1 (888) 627-8085
              and mention the Donnan-McGovern wedding for the discounted rate.
            </div>
          </div>
          <div className="mt-24 font-cormorant-garamond text-center text-[#a0bbd3]">
            <a
              href="https://www.hilton.com/en/hotels/clegwgi-hilton-garden-inn-cleveland-downtown/"
              target={"_blank"}
              rel="noreferrer"
            >
              <h2 className="max-w-xl mt-6 mx-auto text-5xl">
                Hilton Garden Inn
              </h2>
            </a>
            <p className="max-w-xl mt-6 mx-auto text-3xl">Cleveland, Ohio</p>
            <img
              className="mx-auto my-8 sm:max-w-lg"
              src="/images/hotels/hilton_garden_inn.webp"
              alt="Hilton Garden Inn"
            />
            <p className="max-w-xl mt-5 mx-auto text-2xl">1100 Carnegie Ave</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44115</p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              Room Rate: Starting at $189/night
            </p>
            <div className="my-12 text-xl">
              <Button
                text="Book a room"
                onClick={() =>
                  window.open(
                    "https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=CLEGWGI&arrivalDate=2023-06-23&departureDate=2023-06-25&room1NumAdults=1",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </>
      </Container>
    </>
  );
};
