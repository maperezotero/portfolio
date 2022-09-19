import { DiGit, DiGithubBadge } from "react-icons/di";
import { FaFigma, FaTrello, FaSlack } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

export const AsideTools = () => {
  return (
    <aside className="mb-8">
      <div className="bg-[#1e2124] p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6">Tools</h2>
        <ul className="text-base leading-7">
          <li className="flex items-center gap-2">
            <DiGit size={20} />
            Git
          </li>
          <li className="flex items-center gap-2">
            <DiGithubBadge size={20} /> GitHub
          </li>
          <li className="flex items-center gap-2">
            <FaFigma size={20} /> Figma
          </li>
          <li className="flex items-center gap-2">
            <FaTrello size={20} />
            Trello
          </li>
          <li className="flex items-center gap-2">
            <SiAdobephotoshop size={20} />
            PhotoShop
          </li>
          <li className="flex items-center gap-2">
            <FaSlack size={20} />
            Slack
          </li>
        </ul>
      </div>
    </aside>
  );
};
