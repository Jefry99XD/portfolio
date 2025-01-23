import AboutMe from "../app/components/AboutMe"
import MyProjects from "../app/components/MyProjects"
import MyTechnologies from "../app/components/MyTechnologies"
import MyExperiences from "../app/components/MyExp"
import Navbar from "../app/components/navbar"
import Knowledge from "../app/components/Knowledge" // Agregar importación de Knowledge

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutMe />
        <MyExperiences />
        <MyProjects />
        <MyTechnologies />
        <Knowledge />
      </main>
    </div>
  );
}
