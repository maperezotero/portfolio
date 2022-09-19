import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaTelegramPlane,
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-[#1e2124] py-8 border-t-[10px] border-t-[#1e2124]">
      <div className="container max-w-[1140px] px-4 mx-auto flex flex-wrap flex-col justify-between md:flex-row items-center">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/me.jpg"
            alt="me"
            width="180"
            height="180"
            className="rounded-full"
          />
          <div className="my-5 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-12 pb-2">
              Miguel Ángel Pérez
            </h1>
            <h2 className="text-2xl leading-12 pb-1">Full Stack Developer</h2>
            <ul className="py-2">
              <li className="inline-block mr-2">
                <a
                  href=""
                  className="flex items-center justify-center bg-[#2e3238] w-9 h-9 rounded-full"
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li className="inline-block mr-2">
                <a
                  href=""
                  className="flex items-center justify-center bg-[#2e3238] w-9 h-9 rounded-full"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li className="inline-block mr-2">
                <a
                  href=""
                  className="flex items-center justify-center bg-[#2e3238] w-9 h-9 rounded-full"
                >
                  <FaGithubAlt size={20} />
                </a>
              </li>
              <li className="inline-block">
                <a
                  href=""
                  className="flex items-center justify-center bg-[#2e3238] w-9 h-9 rounded-full"
                >
                  <FaYoutube size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <a
            className="bg-[#49AC43] text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 md:hidden"
            href="tg://resolve?domain=maperez"
          >
            <FaTelegramPlane size={20} /> CONTACT ME
          </a>

          <a
            className="bg-[#49AC43] text-white px-5 py-2 rounded-md font-semibold hidden md:flex items-center gap-2"
            href="https://t.me/maperez"
          >
            <FaTelegramPlane size={20} /> CONTACT ME
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
