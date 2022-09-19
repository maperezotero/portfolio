import Footer from "../components/Footer";
import Main from "../components/Main";
import { getAllProjects } from "../lib/data";

export default function Home({ projects }) {
  return (
    <>
      <Main projects={projects} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
