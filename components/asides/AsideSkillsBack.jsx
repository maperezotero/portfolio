import {
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiMysql,
  SiSequelize,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const AsideSkillsBack = () => {
  return (
    <aside className="mb-8">
      <div className="bg-[#1e2124] p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Skills - Backend</h2>
        <ul className="text-base leading-7">
          <li className="flex items-center gap-2">
            <FaNodeJs size={20} />
            Node
          </li>
          <li className="flex items-center gap-2">
            <SiRedux size={20} /> Redux
          </li>
          <li className="flex items-center gap-2">
            <SiExpress size={20} /> Express
          </li>
          <li className="flex items-center gap-2">
            <SiMysql size={20} />
            MySQL
          </li>
          <li className="flex items-center gap-2">
            <SiPostgresql size={20} />
            PostgreSQL
          </li>
          <li className="flex items-center gap-2">
            <SiSequelize size={20} />
            Sequelize
          </li>
          <li className="flex items-center gap-2">
            <SiMongodb size={20} />
            MongoDB
          </li>
        </ul>
      </div>
    </aside>
  );
};
