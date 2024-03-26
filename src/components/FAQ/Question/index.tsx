"use client";

import { useState } from "react";
import clsx from "clsx";

export type FAQ = {
  body: string;
  sys: {
    id: string;
  };
  title: string;
};

type QuestionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

const Question = (props: QuestionProps) => {
  const { children, className, title } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={clsx("flex flex-col w-full", className)}>
      <div
        className={`
          cursor-pointer
          flex
          items-center
          justify-between
          font-bold
          w-full
          py-4
        `}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="w-full">{title}</span>

        <button className="text-lg">{expanded ? "-" : "+"}</button>
      </div>

      <p className={clsx("pb-4", !expanded ? "hidden" : undefined)}>
        {children}
      </p>
    </div>
  );
};

export default Question;
