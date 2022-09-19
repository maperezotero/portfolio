import Section from "./Section";
import { ProjectList } from "./projects";
import {
  AsideEducation,
  AsideLanguages,
  AsideSkillsBack,
  AsideSkillsFront,
  AsideTools,
} from "./asides";

const Main = ({ projects }) => {
  return (
    <div className="container max-w-[1140px] mx-auto flex flex-wrap flex-col px-1 md:px-3 py-4 md:flex-row">
      <div className="w-full md:w-8/12 px-2 md:px-3 py-8">
        <Section />
        <ProjectList projects={projects} />
      </div>

      <div className="w-full md:w-4/12 px-2 md:px-3 py-8">
        <AsideSkillsFront />
        <AsideSkillsBack />
        <AsideTools />
        <AsideEducation />
        <AsideLanguages />
      </div>
    </div>
  );
};

export default Main;
