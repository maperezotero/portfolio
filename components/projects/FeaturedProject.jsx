import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const FeaturedProject = () => {
  return (
    <>
      <Image
        src={"/images/projects/chuchez.jpg"}
        alt="Featured Project"
        width={1349}
        height={768}
        className="rounded-md"
      />
      <h3 className="text-xl font-bold py-5">
        Chuchez - Online Shop WordPress & WooCommerce
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellat
        vel repudiandae obcaecati id, tenetur ab fugit dignissimos debitis nobis
        modi aut. Quidem doloremque sunt, earum maiores explicabo harum, tempora
        cum ipsam alias quia quis beatae! Nulla natus vero, explicabo, voluptate
        eius culpa fuga corporis eum deleniti nisi assumenda nesciunt?
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
