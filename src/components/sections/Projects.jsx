import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Adoption Data Dashboard</h3>
              <p className="text-gray-400 mb-4">
              Developed a full-stack dashboard using React, Flask, and MySQL to deliver a responsive UI, efficient RESTful APIs, and robust data flow across multiple databases.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Python", "MySQL", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/wangsnoopy/devoted-dogs-database"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Tech News Aggregator Platform</h3>
              <p className="text-gray-400 mb-4">
              Built a scalable news aggregator with Flask and Next.js, featuring real-time updates, Dockerized deployment on AWS, and optimized backend performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Next.js", "AWS", "Flask","Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://technews.fallingsakura.top/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Finance Tracker App</h3>
              <p className="text-gray-400 mb-4">
              Engineered a secure and responsive finance tracker with React, Node.js, and MongoDB, enhancing user data handling, authentication, and budget management features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Node.js", "MongoDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/wangsnoopy/personal-financial"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};