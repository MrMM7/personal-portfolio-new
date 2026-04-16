import Image from "next/image";
import DescriptionSection from "./DescriptionSection";

export default function MyWorks() {
  return (
    <div id="myworks" className="scroll-mt-20">
      <DescriptionSection
        title="My Works"
        description="Here are a few projects I’ve built while developing my skills. Each one reflects my focus on clean design, performance, and continuous improvement."
      />
      <div className="flex gap-x-6.5 mt-13">
        <Card
          title="Attio Landing Page"
          imgSrc="/attio.png"
          description="A clean, modern and aesthetically pleasing site inspired fully by Attio."
          designHref="https://www.figma.com/design/g0QLkMpBvd4CZBIDx5ZZvg/Attio---CRM-Landing-Page---Mobile-Responsive--Community-?m=auto&t=FMbND0GAllsMW8Qb-6"
          liveLink="https://attio-landing-page-nine.vercel.app"
        />
        <Card
          title="Area Landing page"
          imgSrc="/area.png"
          description="A clean yet beautiful website inspired by the fictional company Area."
          designHref="https://www.figma.com/site/euoR81fIdbXmjw3SLbtCRX/Modern-Product-Launch--Community-?t=FMbND0GAllsMW8Qb-6"
          liveLink="https://area-landing-page-new.vercel.app"
        />
      </div>
    </div>
  );
}
interface CardProps {
  title: string;
  imgSrc: string;
  description: string;
  designHref: string;
  liveLink: string;
}

function Card({ title, imgSrc, description, designHref, liveLink }: CardProps) {
  return (
    <div className="w-fit border border-secondary px-2 pt-2 pb-10 rounded-[20px] hover:-translate-y-2 transition duration-150">
      <a href={liveLink} target="_blank">
        <Image
          src={imgSrc}
          width={633}
          height={338}
          alt="An image showcasing the product"
        />
      </a>
      <h3 className="title text-center mt-5.5 mb-2.5">{title}</h3>
      <div className="pl-10">
        <p className="body max-w-xl">{description}</p>
        <a
          href={designHref}
          target="_blank"
          className="text-custom-blue body flex gap-1 group"
        >
          <span>Original Figma design</span>
          <Image
            src="/icon-arrow-tr 1.svg"
            width={16}
            height={20}
            alt="an arrow pointing top right"
            className="group-hover:-translate-y-1 transition duration-150 h-auto w-auto"
          />
        </a>
      </div>
    </div>
  );
}
