import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-96">
      ToDo list page!
      <Link href="/todo/insert"> Insert new ToDo </Link>
    </div>
  );
}
