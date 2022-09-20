import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-wrap flex-col md:flex-row mb-10">
      <div className="w-full md:w-4/12 mb-2">
        <Link href={`/project/${project.id}`}>
          <Image
            src={`/images/projects/${project.img}`}
            alt={project.name}
            width={1349}
            height={768}
            className="rounded-md cursor-pointer"
          />
        </Link>
      </div>
      <div className="w-full md:w-8/12 md:pl-8">
        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
        <p>{project.excerpt}</p>
        <Link href={`/project/${project.id}`}>
          <a className="text-[#49ac43]">
            <div className="flex items-center gap-2 py-2">
              <FaExternalLinkAlt /> Find out more
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
