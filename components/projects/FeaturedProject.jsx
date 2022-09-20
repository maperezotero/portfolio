import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const FeaturedProject = () => {
  return (
    <>
      <Link href={`/project/1`}>
        <Image
          src={"/images/projects/chuchez.jpg"}
          alt="Featured Project"
          width={1349}
          height={768}
          className="rounded-md cursor-pointer"
        />
      </Link>
      <h3 className="text-xl font-bold py-5">
        Chuchez - Online Shop WordPress & WooCommerce
      </h3>
      <p>
        Online candy store developed with WordPress and WooCommerce. Custom WP
        theme and Woo Commerce plugin.
      </p>
      <Link href={`/project/1`}>
        <a className="text-[#49ac43]">
          <div className="flex items-center gap-2 py-2">
            <FaExternalLinkAlt /> Find out more
          </div>
        </a>
      </Link>
    </>
  );
};
