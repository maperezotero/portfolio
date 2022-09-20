import { HiAcademicCap } from "react-icons/hi";

export const AsideEducation = () => {
  return (
    <aside className="mb-8">
      <div className="bg-[#1e2124] p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <ul className="text-base leading-7">
          <li className="flex flex-col mb-4">
            <div className="flex items-center gap-2">
              <HiAcademicCap size={20} />{" "}
              <h4 className="font-semibold">Full Stack Developer</h4>
            </div>
            <span className="text-base font-light pl-7">
              Bootcamp at{" "}
              <a
                href="https://www.soyhenry.com/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-dashed"
              >
                Henry
              </a>{" "}
              More than 800 hours of programming based on practices and real
              projects.
            </span>
          </li>

          <li className="flex flex-col mb-4">
            <div className="flex items-center gap-2">
              <HiAcademicCap size={20} />{" "}
              <h4 className="font-semibold">System Administrator</h4>
            </div>
            <span className="text-base font-light pl-7">
              Certificate of Higher Education (HNC). IES Alfonso XI Alcalá la
              Real, Jaén.
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
