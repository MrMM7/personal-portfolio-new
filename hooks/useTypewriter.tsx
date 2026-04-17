"use client";
import { useState, useEffect } from "react";

export const useTypewriter = (text: string, speed: number) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, index + 1));
          setIndex(index + 1);
        }, speed);

        return () => clearTimeout(timeout);
      }
    }, [index, text, speed]);

    useEffect(() => {
      setDisplayText("");
      setIndex(0);
    }, [text]);

    return displayText;
  };