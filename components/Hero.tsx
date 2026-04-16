"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [slogan, setSlogan] = useState("");
  const mySlogan =
    "a passionate frontend developer building modern web experiences with Next.js.";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setSlogan(mySlogan.slice(0, i + 1));
      i++;

      if (i === mySlogan.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-between mt-40 items-center">
      <div className="title pr-28.75">
        <h1>Hello, I’m MrMM7</h1>
        <p>
          {slogan}
          {slogan.length !== mySlogan.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      </div>
      <Image
        src="/person.png"
        width={516}
        height={637}
        alt="An image of a person with their face blurred"
        loading="eager"
      />
    </div>
  );
}
