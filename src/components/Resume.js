import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLink,
} from "react-icons/fa";

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto p-10 text-gray-900 bg-white">
      
      {/* Header */}
      <div className="text-center border-b pb-5">
        <h1 className="text-4xl font-bold">Satrapu Balakrishna</h1>

        <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm">
          <span>+91-9392564627</span>

          <a
            href="mailto:balakrishnasatrapu@gmail.com"
            className="hover:text-blue-600"
          >
            balakrishnasatrapu@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/balakrishna-satrapu/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/balakrishna-satrapu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/Balakrishna_Satrapu/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <FaCode />
            LeetCode
          </a>

          <a
            href="https://codeforces.com/profile/balakrishnasatrapu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <FaCode />
            Codeforces
          </a>
        </div>
      </div>

      {/* Summary */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1">Summary</h2>

        <p className="mt-3 leading-7">
          Aspiring Software Engineer with strong problem-solving skills
          (450+ DSA problems) and hands-on experience building scalable
          full-stack applications using React, Node.js, and MongoDB.
          Experienced in developing secure REST APIs and optimizing backend
          performance. Seeking entry-level SDE roles.
        </p>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1">Education</h2>

        <div className="mt-4 space-y-5">
          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">
                R.V.R & J.C College of Engineering
              </h3>
              <span>2025</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <p>B.Tech in Computer Science and Engineering</p>
              <p>7.95/10.0</p>
            </div>

            <p className="text-gray-600">
              Acharya Nagarjuna University
            </p>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">NRI Junior College</h3>
              <span>2021</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <p>Intermediate</p>
              <p>875/1000</p>
            </div>

            <p className="text-gray-600">
              BIEAP (Board of Intermediate Education Andhra Pradesh)
            </p>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">
                Ushodaya English Medium School
              </h3>
              <span>2019</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <p>10th Standard</p>
              <p>441/500</p>
            </div>

            <p className="text-gray-600">
              CBSE (Central Board of Secondary Education)
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1">
          Experience
        </h2>

        <div className="mt-5 space-y-6">
          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">
                Full Stack Developer Intern
              </h3>
              <span>Dec 2025 - Mar 2026</span>
            </div>

            <p className="text-gray-600">
              Orvionar Tech Pvt Ltd, Bangalore
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Developed and deployed full-stack web applications using
                React, Node.js, and Express.
              </li>
              <li>
                Designed and implemented REST APIs for authentication and
                data processing.
              </li>
              <li>
                Optimized database queries improving response time by 20%.
              </li>
              <li>
                Implemented JWT-based authentication.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-semibold">Mentor Intern</h3>
              <span>Jun 2024 - Jul 2024</span>
            </div>

            <p className="text-gray-600">
              Hexagon R&D Capability Center, Hyderabad
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Gained exposure to software development lifecycle and
                engineering practices.
              </li>
              <li>
                Assisted in application development and problem solving.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1">
          Projects
        </h2>

        <div className="mt-5 space-y-7">

          {/* Project 1 */}
          <div>
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="font-semibold">
                DevConnect - Developer Networking Platform
              </h3>

              <div className="flex gap-3 text-sm">
                <a
                  href="https://github.com/balakrishna-satrapu/devConnect-web"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaGithub />
                  Frontend
                </a>

                <a
                  href="https://github.com/balakrishna-satrapu/devConnect"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaGithub />
                  Backend
                </a>

                <a
                  href="https://dev-connect-web-hazel.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaLink />
                  Website
                </a>
              </div>
            </div>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Built a full-stack developer networking platform using MERN.
              </li>
              <li>
                Implemented authentication and connection features.
              </li>
              <li>
                Designed scalable backend architecture.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div>
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="font-semibold">
                Food Delivery App
              </h3>

              <div className="flex gap-3 text-sm">
                <a
                  href="https://github.com/balakrishna-satrapu/Food-Delivery-App-Cravely"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://food-delivery-app-cravely.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaLink />
                  Website
                </a>
              </div>
            </div>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Developed responsive frontend using React and Redux.
              </li>
              <li>
                Implemented cart functionality and API integration.
              </li>
            </ul>
          </div>

          {/* Project 3 */}
          <div>
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="font-semibold">
                Character Recognition in Low Resolution Images
              </h3>

              <div className="flex gap-3 text-sm">
                <a
                  href="https://github.com/balakrishna-satrapu/Character-Recognition-in-Low-Resolution-Images"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://zenodo.org/records/15314311"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <FaLink />
                  Publication
                </a>
              </div>
            </div>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Developed a machine learning model for character recognition from low-resolution images.
              </li>
              <li>
                Applied preprocessing techniques such as normalization and noise reduction. 
              </li>
              <li>
                Improved model performance using a collaborative learning approach.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1">
          Skills
        </h2>

        <div className="mt-4 space-y-2">
          <p>
            <span className="font-semibold">Languages:</span>
            {" "}C++, Java, JavaScript
          </p>

          <p>
            <span className="font-semibold">Frontend:</span>
            {" "}React.js, Redux, Tailwind CSS
          </p>

          <p>
            <span className="font-semibold">Backend:</span>
            {" "}Node.js, Express.js
          </p>

          <p>
            <span className="font-semibold">Database:</span>
            {" "}MongoDB
          </p>

          <p>
            <span className="font-semibold">Tools:</span>
            {" "}Git, GitHub, Postman
          </p>

          <p>
            <span className="font-semibold">Core:</span>
            {" "}DSA, OOPs, DBMS, OS, CN
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-1">
          Achievements
        </h2>

        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>
            Solved 450+ DSA problems across LeetCode, Codeforces,
            and GeeksForGeeks.
          </li>

          <li>
            Strong in Trees, Graphs, and Dynamic Programming.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;