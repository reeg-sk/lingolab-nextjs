"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Details = ({
  question,
  answer,
  isOpen = false,
}: {
  question: string;
  answer: string;
  isOpen?: boolean;
}) => {
  const [opened, setOpened] = useState(isOpen);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <div className="rounded-lg p-4 pb-2">
      <button
        type="button"
        onClick={toggleOpened}
        className={`group w-full flex justify-between items-baseline ${!isOpen ? 'border-t' : ''} pt-4 text-lg font-semibold mb-2 text-left`}
      >
        {question}
        <span className="flex items-center h-7 ml-7">
          {/* <!-- replace for an icon --> */}
          <svg
            className={`w-6 h-6 transition-transform transform ${
              opened ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence mode="sync">
        {opened && (
          <motion.p
          initial={{ height: 0 }}
          animate={{ height: "fit-content" }}
          exit={{ height: 0 }}
          transition={{duration: 0.3, type: "spring"}}
            className="text-gray-600 overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Details;
