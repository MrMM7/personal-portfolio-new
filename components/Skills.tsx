import Image from "next/image";
import DescriptionSection from "./DescriptionSection";
import FadeInWrapper from "./FadeInWrapper";

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-20">
      <DescriptionSection
        title="Skills"
        description="I’m always eager to learn and refine my abilities, I’ve put together a collection of my current front-end development skills. These are the tools I’m currently using to build and create."
      />
      <div className="mt-22.5 ml-2.5">
        <div>
          <FadeInWrapper>
            <h3 className="subsection">Advanced</h3>
          </FadeInWrapper>

          <div className="flex flex-wrap mt-6 mb-5.5 gap-x-3 gap-y-5.5">
            <FadeInWrapper>
              <SkillCard
                iconSrc="/react.png"
                description="React is a JavaScript library for building dynamic and reusable user interfaces."
                link="https://react.dev"

              />
            </FadeInWrapper>

            <FadeInWrapper>
              <SkillCard
                iconSrc="/next.png"
                description="Next.js is A React framework for building fast, and SEO-friendly web applications."
                link="https://nextjs.org"
              />
            </FadeInWrapper>

            <FadeInWrapper>
              <SkillCard
                iconSrc="/ts.png"
                description="TypeScript is a typed superset of JavaScript that adds static types"
                link="https://www.typescriptlang.org/"
              />
            </FadeInWrapper>

            <FadeInWrapper>
              <SkillCard
                iconSrc="/tailwind.png"
                description="Tailwind is a utility-first CSS framework for rapid UI development."
                link="https://tailwindcss.com/"
              />
            </FadeInWrapper>
          </div>
        </div>

        <div>
          <FadeInWrapper>
            <h3 className="subsection">Intermediate</h3>
          </FadeInWrapper>

          <div className="flex flex-wrap mt-6 mb-5.5 gap-x-3 gap-y-5.5">
            <FadeInWrapper>
              <SkillCard
                iconSrc="/git.png"
                description="Git is a distributed version control system for tracking changes in code."
                link="https://git-scm.com"
              />
            </FadeInWrapper>

            <FadeInWrapper>
              <SkillCard
                iconSrc="/figma.png"
                description="Figma is a browser-based UI/UX design tool for real-time team collaboration."
                link="https://figma.com"
                shrinkImg
              />
            </FadeInWrapper>
          </div>
        </div>

        <div>
          <FadeInWrapper>
            <h3 className="subsection">Beginner</h3>
          </FadeInWrapper>

          <div className="flex flex-wrap mt-6 mb-5.5 gap-x-3 gap-y-5.5">
            <FadeInWrapper>
              <SkillCard
                iconSrc="/motion.png"
                description="Motion is a powerful animation library for React with physics-based motion."
                link="https://motion.dev"
              />
            </FadeInWrapper>
            <FadeInWrapper>
              <SkillCard
                iconSrc="/brush.png"
                description="UI/UX combines visual design and user experience for intuitive digital products."
                link="#"
              />
            </FadeInWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SkillCardProps {
  iconSrc: string;
  description: string;
  link: string;
  shrinkImg?: boolean
}

function SkillCard({
  description,
  iconSrc,
  shrinkImg=false,
  link,
}: SkillCardProps) {
  return (
    <a
      href={link}
      target={link !== "#" ? "_blank" : "_self"}
      className="flex py-4 px-3 items-center gap-2.5 border border-secondary rounded-2xl shadow-md shadow-neutral-400 transition duration-150 hover:-translate-y-2 active:cursor-default"
    >
      <div className="bg-black w-14.5 h-13.75 rounded-lg flex justify-center items-center">
        <Image
          src={iconSrc}
          width={45}
          height={45}
          alt="Icon"
          className={`w-auto h-auto ${shrinkImg && "px-4"}`}
        />
      </div>
      <p className="caption max-w-xs">{description}</p>
    </a>
  );
}
