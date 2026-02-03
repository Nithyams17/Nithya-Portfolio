import Image from "next/image";

// Sample project data
const projects = [
  {
    
    title: "Online learning management system",
    description: "An online LMS (Learning Management System) is a web-based platform that delivers, tracks, and manages educational courses and training programs.",
    image: "/projectofnithya.png",
    tech: ["Mern stack", "React", "Mongo DB"],
    live: "https://github.com/Nithyams17",
    github: "https://github.com/Nithyams17",
},
  
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white dark:bg-gray-900">
  <div className="max-w-screen-lg mx-auto text-center">
    <h3 className="text-4xl font-bold py-2 dark:text-white">Project</h3>
    <p className="text-lg py-3 leading-8 text-gray-800 dark:text-gray-200">
      As a passionate developer specializing in Fullstack and AI-driven solutions, I built an Online Learning Management System (LMS) using the MERN stack, focusing on creating interactive, user-friendly learning experiences. The project showcases my skills in developing dynamic web applications, managing course content, user authentication, and real-time interactions, while ensuring a scalable and responsive platform for learners and instructors alike.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">Check them out below.</p>
  <br/>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill={true}
                style={{ objectFit: 'cover' }}
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
