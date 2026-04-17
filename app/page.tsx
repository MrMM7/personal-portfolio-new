"use client";
import Hero from "@/components/Hero";
import DescriptionSection from "@/components/DescriptionSection";
import MyWorks from "@/components/MyWorks";
import Skills from "@/components/Skills";
import FadeInWrapper from "@/components/FadeInWrapper";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("67 😂");
  }, []);

  const myDescription =
    "I’m a passionate 15-year-old frontend developer focused on building clean, modern web experiences. I enjoy turning ideas into polished interfaces and continuously improving both my technical and design skills. I’m currently focused on growing through real projects and pushing myself to create work that feels fast, intentional, and impactful.";
  return (
    <main>
      <FadeInWrapper>
        <Hero />
      </FadeInWrapper>

      <div className="flex flex-col mt-62.5 mb-25 gap-y-62.5">
        <FadeInWrapper>
          <DescriptionSection
            title="Who am I?"
            description={myDescription}
            id="whoami"
          />
        </FadeInWrapper>

        <FadeInWrapper>
          <MyWorks />
        </FadeInWrapper>

        <FadeInWrapper>
          <Skills />
        </FadeInWrapper>

        <FadeInWrapper>
          <DescriptionSection
            title="Availability"
            description={
              <span>
                Due to my age I am never available for potential job offers :3
                <br />
                Although there <i>can</i> be some exceptions.
              </span>
            }
            id="availablity"
          />
          <a
            href="https://github.com/MrMM7"
            target="_blank"
            className="text-primary body flex gap-1 group caption mt-5 w-fit h-fit"
          >
            <span>My Github</span>
            <Image
              src="/icon-arrow-tr 1.svg"
              width={16}
              height={20}
              alt="an arrow pointing top right"
              className="group-hover:-translate-y-1 transition duration-150 h-auto w-auto grayscale-100"
            />
          </a>
          <a
            href="https://github.com/MrMM7/personal-portfolio-new"
            target="_blank"
            className="text-primary body flex gap-1 group caption mt-2 w-fit h-fit"
          >
            <span>This websites code</span>
            <Image
              src="/icon-arrow-tr 1.svg"
              width={16}
              height={20}
              alt="an arrow pointing top right"
              className="group-hover:-translate-y-1 transition duration-150 h-auto w-auto grayscale-100"
            />
          </a>
        </FadeInWrapper>
      </div>
    </main>
  );
}
