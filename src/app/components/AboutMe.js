import Image from 'next/image';

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="p-8 bg-white rounded-lg shadow-md mb-8 flex items-center"
    >
      {/* Foto de perfil */}
      <div className="mr-6">
        <Image
          src="/fotos/pfp.jpg" 
          alt="Profile Picture"
          width={500}  
          height={500} 
          className="rounded-full object-cover"
        />
      </div>

      {/* Texto */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Hi, I&apos;m <span className="font-semibold">Jefry Cuendiz</span>, a Computer Engineer recently graduated from the
          <span className="font-semibold"> Tecnológico de Costa Rica</span>, with knowledge in Software Engineering and Computer Science.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          I&apos;m a tech enthusiast passionate about data, software development, Software Quality Assurance, and Deployment and Delivery.
          I truly enjoy building systems from scratch to finish or getting involved in existing large-scale systems.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          I love solving problems using my knowledge and experience. Besides coding, I enjoy <span className="font-semibold">PC Modding</span>,
          <span className="font-semibold"> Networking</span>, and exploring <span className="font-semibold">AI topics</span>.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
        Contact me on jefryccuendiz99@gmail.com
        </p>

        {/* Links Section */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://github.com/Jefry99XD"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jefry-cuendiz-6598b6301"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
