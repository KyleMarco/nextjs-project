import classNames from "classnames";
import Link from "next/link";

export default function LinkButton({ label, href }: { label: string, href: string }) {
    return (
        <Link href={href} className={
            classNames(
              "flex items-center justify-center w-[150px] h-[50px] mb-2 text-center",
              "border-4 border-gray-100 m-4 rounded-md",
              "hover:bg-gray-100 hover:text-black"
            )
          }> {label} </Link>
    )
}