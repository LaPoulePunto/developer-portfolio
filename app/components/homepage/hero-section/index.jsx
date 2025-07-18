import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello,
            <br />
            I&apos;m <span className="text-pink-500">{personalData.name}</span>,
            <br />
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-center md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-200" />
            </div>
          </div>
          <div className="overflow-hidden border-t-2 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink text-pink-500">const</div>{" "}
              <div className="text-white">coder</div>{" "}
              <div className="text-pink-500">=</div>{" "}
              <div className="text-gray-400">{"{"}</div>
              <div className="ml-4 lg:ml-8 text-white">
                name:{" "}
                <span className="text-amber-300">
                  &apos;{personalData.name}&apos;
                </span>
                ,
              </div>
              <div className="ml-4 lg:ml-8 text-white">
                skills: <span className="text-gray-400">[</span>
                <span className="text-amber-300">
                  React, NextJS, MySQL, Oracle Database, PostgreSql, Docker,
                  AWS, Python, Power BI, Grafana
                </span>
                <span className="text-gray-400">]</span>,
              </div>
              <div className="ml-4 lg:ml-8 text-white">
                hardWorker: <span className="text-orange-400">true</span>,
              </div>
              <div className="ml-4 lg:ml-8 text-white">
                quickLearner: <span className="text-orange-400">true</span>,
              </div>
              <div className="ml-4 lg:ml-8 text-white">
                problemSolver: <span className="text-orange-400">true</span>,
              </div>
              <div className="ml-4 lg:ml-8 text-green-400">
                hireable: <span className="text-orange-400">() =&gt;</span>{" "}
                <span className="text-gray-400">
                  (this.hardWorker &amp;&amp; this.quickLearner &amp;&amp;
                  this.skills.length &gt;= 5)
                </span>
                ,
              </div>
              <div className="text-gray-400">{"};"}</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
