export default function MyExperiences() {
    return (
      <section
        id="my-experiences"
        className="p-8 bg-gray-50 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Experiences</h2>
        <ul className="space-y-6">
          {/* Experience 1 */}
          <li className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">
              KuarcTech Solutions
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              <strong>Role:</strong> Fullstack Developer | <strong>Dates:</strong> July - December, 2024
            </p>
            <p className="text-gray-600">
              Development of the Kuarc Project Manager module to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Manage projects, view tasks, assign resources, and team members.</li>
              <li>Assign stakeholders and view project progress.</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Developed using:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              <li>.NET, Angular, PostgreSQL, Neo4j</li>
              <li>WebSockets and Bitbucket</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Additional Responsibilities:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              <li>Peer user story reviews and test cases for software quality assurance.</li>
            </ul>
          </li>
          {/* Experience 2 */}
          <li className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">
              BanProcesos
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              <strong>Role:</strong> IT Networking Intern | <strong>Dates:</strong> September - December, 2018
            </p>
            <p className="text-gray-600">
              Responsibilities included:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Maintenance of computer equipment.</li>
              <li>Servers maintenance.</li>
              <li>Network equipment configuration.</li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
  