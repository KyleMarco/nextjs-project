import classNames from "classnames";
import Link from "next/link";

export default function LinkButton({ label, href }: { label: string, href: string }) {
    return (
        <Link href={href} className={
            classNames(
              "block",
              "w-[150px] p-4",
              "lg:text-center",
              "rounded-md",
              "hover:bg-[#d8dfe9cc] hover:text-black"
            )
          }> {label} </Link>
    )
}