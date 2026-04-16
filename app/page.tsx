import Hero from "@/components/Hero";
import DescriptionSection from "@/components/DescriptionSection";
import MyWorks from "@/components/MyWorks";
import Skills from "@/components/Skills";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function Home() {
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
        </FadeInWrapper>
      </div>
    </main>
  );
}


