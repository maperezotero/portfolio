import { FeaturedProject, ProjectCard } from ".";

export const ProjectList = ({ projects }) => {
  return (
    <section className="mb-8">
      <div className="bg-[#1e2124] p-4 md:p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Some of my projects</h2>
        <FeaturedProject />
        <hr className="text-inherit my-12 opacity-25" />
        {projects.map(
          (pr) =>
            pr.featured === false && <ProjectCard key={pr.id} project={pr} />
        )}
      </div>
    </section>
  );
};
