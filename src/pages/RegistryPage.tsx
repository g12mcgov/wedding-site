import * as React from "react";
import { RegistryItem } from "../components/registry/RegistryItem";

export const RegistryPage = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-6 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Registry
        </h1>
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:space-x-8 my-4 sm:my-16 px-4">
        <div>
          <RegistryItem
            image="/images/honeymoon_fund_cover.webp"
            overlay={
              <div>
                <h1>Honeymoon Fund</h1>
                <h2 className="text-2xl">(Coming Soon)</h2>
                <img
                  className="absolute w-[150px] m-auto left-0 right-0 mt-28"
                  src="/images/stripe.webp"
                  alt="Powered by Stripe"
                />
              </div>
            }
            url="https://donate.stripe.com/6oE8zAgwW9rm2jucMM"
          />
          <RegistryItem
            image="/images/crate_and_barrel.webp"
            overlay={<h1>Crate & Barrel</h1>}
            url="https://www.crateandbarrel.com/gift-registry/megan-donnan/r6649276"
          />
        </div>
        <div>
          <RegistryItem
            image="/images/bloomingdales.webp"
            overlay={<h1>Bloomingdales</h1>}
            url="https://www.bloomingdales.com/registry/wedding/guest/MEGAN-DONNAN-GRANT-MCGOVERN/?registryId=7406179"
          />
          <RegistryItem
            image="/images/amazon.webp"
            overlay={<h1>Amazon</h1>}
            url="https://www.amazon.com/wedding/grant-mcgovern-megan-donnan--june-2023/registry/37PZPOOSD6YO0"
          />
        </div>
      </div>
    </>
  );
};
