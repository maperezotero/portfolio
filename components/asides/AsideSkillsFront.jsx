import { SiReact, SiTailwindcss, SiWordpress } from "react-icons/si";
import { IoLogoNodejs, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";

export const AsideSkillsFront = () => {
  return (
    <aside className="mb-8">
      <div className="bg-[#1e2124] p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Skills - Frontend</h2>
        <ul className="text-base leading-7">
          <li className="flex items-center gap-2">
            <SiReact size={20} />
            React
          </li>
          <li className="flex items-center gap-2">
            <IoLogoJavascript size={20} /> JavaScript
          </li>
          <li className="flex items-center gap-2">
            <IoLogoNodejs size={20} /> Node.js
          </li>
          <li className="flex items-center gap-2">
            <TbBrandNextjs size={20} />
            Next.js
          </li>
          <li className="flex items-center gap-2">
            <SiWordpress size={20} />
            WordPress
          </li>
          <li className="flex items-center gap-2">
            <SiTailwindcss size={20} />
            Tailwind CSS
          </li>
          <li className="flex items-center gap-2">
            <IoLogoSass size={20} />
            Sass
          </li>
        </ul>
      </div>
    </aside>
  );
};
