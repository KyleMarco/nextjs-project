import LinkButton from "@/app/components/link-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <LinkButton href="/home" label="Start here!" />
    </div>
  );
}
