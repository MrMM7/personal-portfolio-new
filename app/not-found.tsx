import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-center flex-col gap-y-5">
        <p className="title scale-150">404</p>
        <h1 className="title scale-150">Uh Oh</h1>
        <p className="subsection">Your not supposed to be here.</p>
        <Link href="/" className="bg-primary text-white w-full body text-center py-6 rounded-2xl active:scale-90 transition duration-150">
          Home
        </Link>
      </div>
    </div>
  );
}
