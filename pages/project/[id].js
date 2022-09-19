import Layout from "../../components/Layout";
import { projects } from "../../lib/projects";
import {
  AsideEducation,
  AsideLanguages,
  AsideSkillsBack,
  AsideSkillsFront,
  AsideTools,
} from "../../components/asides";
import Image from "next/image";
import { FaExternalLinkAlt, FaHome } from "react-icons/fa";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <Layout>
      <div className="container max-w-[1140px] mx-auto flex flex-wrap flex-col px-1 md:px-3 py-4 md:flex-row">
        <div className="w-full md:w-8/12 px-2 md:px-3 py-8">
          <div>
            <Image
              src={`/images/projects/${project.img}`}
              alt={project.name}
              width={1349}
              height={768}
              layout="responsive"
              className="rounded-md"
            />
          </div>
          <div className="bg-[#1e2124] py-4 px-8 rounded-md mt-8">
            <h1 className="text-2xl font-bold my-2">{project.name}</h1>
            <p>{project.excerpt}</p>
            <div className="flex justify-between items-center py-8">
              <Link href="/">
                <a className="text-[#49ac43]">
                  <div className="flex items-center gap-2 py-2">
                    <FaHome /> Back to home
                  </div>
                </a>
              </Link>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#49ac43]"
              >
                <div className="flex items-center gap-2 py-2">
                  <FaExternalLinkAlt /> Visit site
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-2 md:px-3 py-8">
          <AsideSkillsFront />
          <AsideSkillsBack />
          <AsideTools />
          <AsideEducation />
          <AsideLanguages />
        </div>
      </div>
    </Layout>
  );
};

export default Project;

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: {
      id: project.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      project: project[0],
    },
  };
}
