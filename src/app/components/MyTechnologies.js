export default function MyTechnologies() {
  return (
    <section
      id="my-technologies"
      className="p-8 bg-gray-100 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Technologies</h2>
      <p className="text-gray-600 mb-6">
        Below are the technologies I work with:
      </p>
      <div className="flex flex-wrap gap-6">

      <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Languajes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>C++</li>
            <li>C</li>
            <li>JAVA</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>C#</li>
          </ul>
        </div>
        {/* Backend */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Backend</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>ASP.NET</li>
            <li>Laravel</li>
          </ul>
        </div>
        {/* Frontend */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Frontend</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Angular</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Next.js</li>
          </ul>
        </div>
        {/* Databases */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Databases</h3>
          <ul className="space-y-2 text-gray-600">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>OracleDB</li>
            <li>Neo4j</li>
            <li>Cassandra</li>
            <li>Redis</li>
          </ul>
        </div>
        {/* Tools */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Tools</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Git & Github</li>
            <li>Cisco IOS</li>
            <li>Github Actions</li>
            <li>Jenkins</li>
            <li>Oracle Cloud</li>
            <li>Azure</li>
            <li>AWS</li>
            <li>Postman</li>
            <li>Jira, Trello</li>
          </ul>
        </div>
        {/* Game Development */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Game Development</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Unity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
