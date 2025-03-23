import { Cart } from "@/app/components/cart";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Cart />
      {/* <Link href="/cart/checkout"> Checkout </Link> */}
    </div>
  );
}
