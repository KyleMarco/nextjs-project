import Checkout from "@/app/components/cart/checkout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Checkout />
      <Link href="/cart/"> Cart </Link>
    </div>
  );
}
