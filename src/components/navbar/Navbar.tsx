import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavbarLink } from "./NavbarLink";

export const Navbar = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavbarLink text="Our Wedding" route="/" />
                  <NavbarLink
                    text="Guest Accomodations"
                    route="/guest-accomodations"
                  />
                  <NavbarLink text="Details" route="/details" />
                  <NavbarLink text="Photography" route="/photography" />
                  <NavbarLink text="Registry" route="/registry" />
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col pt-2 pb-4 space-y-1">
              <NavbarLink text="Our Wedding" route="/" />
              <NavbarLink
                text="Guest Accomodations"
                route="/guest-accomodations"
              />
              <NavbarLink text="Details" route="/details" />
              <NavbarLink text="Photography" route="/photography" />
              <NavbarLink text="Registry" route="/registry" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
