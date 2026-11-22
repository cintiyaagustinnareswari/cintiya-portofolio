
import {
  SiPython,
  SiR,
  SiPostgresql,
  SiMysql,
  SiScikitlearn,
  SiFigma,
  SiFastapi,
  SiGit,
  SiGithub,
} from "react-icons/si";

import {
  FaFileExcel,
  FaChartBar,
  FaTable,
} from "react-icons/fa";

const tools = [
  { name: "Python", icon: SiPython },
  { name: "R", icon: SiR },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Microsoft Excel", icon: FaFileExcel },
  { name: "Power BI", icon: FaChartBar },
  { name: "Tableau", icon: FaTable },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Figma", icon: SiFigma },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-[#3979B9] uppercase">
            My Technical Toolkit
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24364B] mt-3">
            Tools & Technologies
          </h2>

          <p className="text-[#64748B] mt-3">
            Technologies and applications I use in my work and projects.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center gap-4 min-h-36 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3979B9] hover:shadow-lg"
              >
                <Icon className="text-4xl text-[#3979B9] transition-transform duration-300 group-hover:scale-110" />

                <span className="text-sm font-semibold text-[#24364B] text-center">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
