import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 ">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-primary flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Pet Nest Logo"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
    </Link>
  );
};
