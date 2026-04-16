"use client"
export default function Footer({}) {
  const year = new Date().getFullYear();
  return (
    <div className="mb-5">
      <h4 className="text-neutral-400 body text-center">&copy;{year} MrMM7</h4>
    </div>
  );
}
