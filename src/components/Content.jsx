import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import relaod from "../assets/reload.svg";
import chevron from "../assets/chevron.svg";
import reload2 from "../assets/reload2.svg";
import zoom from "../assets/zoom.svg";
import logo from "../assets/logo.png";
import logo3 from "../assets/logo3.svg";
import plus from "../assets/plus.svg";

const Content = () => {
  return (
    <div>
      <div className="flex py-14 px-80">
        <p className="px-4 text-2xl text-[#051a91] border-b-2 border-gray-700 py-1">
          Study
        </p>
        <p className="px-4 text-2xl text-gray-600">Quiz</p>
        <p className="px-4 text-2xl text-gray-600">Test</p>
        <p className="px-4 text-2xl text-gray-600">Game</p>
        <p className="px-4 text-2xl text-gray-600">Other</p>
      </div>

      <div className="box-border w-full h-[394px] max-w-[720px] mx-auto rounded-3xl content-center bg-gradient-to-tr from-[#1f80eb] via-[#2284f1] to-[#051a91]">
        <p className="flex justify-center text-white text-4xl">
          9 + 6 + 7x - 2x -3
        </p>
      </div>
      <div className="flex justify-center py-8">
        <img src={relaod} className="pr-32" />
        <img src={chevron} className="pr-4" />
        <p className="text-3xl px-8">01/10</p>
        <img src={reload2} className="pr-4" />
        <img src={zoom} alt="" className="pl-32" />
      </div>
      <div className="flex py-8">
        <div className="flex pl-16">
          <img src={logo} />
          <img src={logo3} />
        </div>

        <div className="flex pl-[700px]">
          <img src={plus} className="w-24 px-4" />
          <p className="text-4xl py-12 text-[#051a91]">Create Flashcard</p>
        </div>
      </div>
      <p className="text-5xl py-12 pl-24 text-[#051a91]">FAQ</p>
      <div className="h-screen w-auto pt-4 mr-44">
        <div className="border-2 border-[#051a91] mx-32 rounded-2xl">
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-lg">
                Can education flashcards be used for all age groups?
              </span>
              <ChevronDownIcon className="size-6" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 ">
              Yes, education flashcards can be tailored to different age groups
              and learning levels. There are flashcards designed for
              placeholders, elementary school students, and even for
              college-level and adult learners.
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div className="border-2 mt-8 border-[#051a91] mx-32 rounded-2xl">
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-lg">
                How do education flashcards works?
              </span>
              <ChevronDownIcon className="size-6" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2">
              Education flashcards work by presenting a question or prompt on
              one side and the corresponding answer or information on the other.
              Users can review the cards repeatedly, reinforcing their memory
              and memory and enhancing learning through repetition.
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div className="border-2 mt-8 border-[#051a91] mx-32 rounded-2xl">
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-lg">
                Can education flashcards be used for test preparation?
              </span>
              <ChevronDownIcon className="size-6" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2">
              Absolutely. Flashcards are an exellent tool for test preparation,
              allowing students to review key concepts, terms, and facts. They
              provide a quick and focused way to reinforce knowledge before
              exams.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Content;
