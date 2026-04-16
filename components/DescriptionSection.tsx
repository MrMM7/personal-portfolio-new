import { ReactElement } from "react";

export default function DescriptionSection({
  title,
  description,
  id="",
}: {
  title: string;
  description: string | ReactElement;
  id?: string;
}) {
  return (
    <div className="max-w-[710] scroll-mt-20" id={id}>
      <h2 className="title">{title}</h2>
      <p className="body mt-4.5">{description}</p>
    </div>
  );
}
