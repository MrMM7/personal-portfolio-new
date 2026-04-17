"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [mainSlogan, setMainSlogan] = useState("");
  const [helloText, setHelloText] = useState("");

  const fullHelloText = "Hello, I’m MrMM7";
  const fullSlogan =
    "a passionate frontend developer building modern web experiences with Next.js.";
  const textSpeed = 45;
  useEffect(() => {
    const typeText = (
      text: string,
      setter: (value: string) => void,
      speed: number,
    ) => {
      return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
          if (i <= text.length) {
            setter(text.slice(0, i));
            i++;
          } else {
            clearInterval(interval);
            resolve(true);
          }
        }, speed);
      });
    };

    const runSequence = async () => {
      await typeText(fullHelloText, setHelloText, textSpeed);
      setTimeout(
        async () => await typeText(fullSlogan, setMainSlogan, textSpeed),
        800,
      );
    };

    runSequence();
  }, []);

  return (
    <div className="flex justify-between mt-40 items-center">
      <div className="title pr-28.75">
        <h1>
          {helloText}
          {helloText.length !== fullHelloText.length &&
            helloText.length !== 0 && <span>|</span>}
        </h1>
        <p>
          {mainSlogan}
          {helloText.length === fullHelloText.length && (
            <span
              className={
                mainSlogan.length === fullSlogan.length ||
                (helloText.length === fullHelloText.length &&
                  mainSlogan.length === 0)
                  ? "cursor"
                  : ""
              }
            >
              |
            </span>
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
