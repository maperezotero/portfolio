import Layout from "../components/Layout";
import Main from "../components/Main";
import { getAllProjects } from "../lib/projects";

export default function Home({ projects }) {
  return (
    <Layout title={"Mapo Portfolio & CV"}>
      <Main projects={projects} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
