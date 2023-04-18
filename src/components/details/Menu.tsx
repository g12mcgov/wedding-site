import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../buttons/Button";

const { useState, Fragment } = React;

export const Menu = (): JSX.Element => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <Button text="View Menu" size="small" onClick={openModal} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="text-[#a0bbd3] font-cormorant-garamond text-center fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <button
                    style={{
                      position: "absolute",
                      top: "-0.75rem",
                      right: "1rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "2.5rem",
                    }}
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                  <div className="mt-2">
                    <p className="text-3xl italic">To Start:</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xl">
                      Summer Strawberry Salad with goat cheese, heart of palm,
                      and almonds
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-3xl italic">Choice of Entrée:</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xl">
                      Charbroiled Filet Mignon with red wine demi-glace
                    </p>
                    <p className="my-4 text-l italic">or</p>
                    <p className="text-xl">
                      Harissa glazed Norwegian Aukra Salmon
                    </p>
                    <p className="my-4 text-l italic">or</p>
                    <p className="text-xl">
                      Cauliflower steak with vegetarian accompaniments
                      (Vegetarian)
                    </p>
                    <div className="mt-8">
                      <p className="text-3xl italic">Sides:</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xl">Petite Potato Gratin</p>
                      <p className="my-4 text-l italic">and</p>
                      <p className="text-xl">Haricot Verts</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
