import Head from "next/head";
import AboutMe from "../app/components/AboutMe"
import MyProjects from "../app/components/MyProjects"
import MyTechnologies from "../app/components/MyTechnologies"
import MyExperiences from "../app/components/MyExp"
import Navbar from "../app/components/navbar"
import Knowledge from "../app/components/Knowledge" // Agregar importación de Knowledge

export default function Home() {
  return (
    <div>
      <Head>
      <meta property="og:title" content="PortFolio" />
        <meta property="og:description" content="Aquí puedes conocer más sobre mis proyectos, experiencias y habilidades." />
        <meta property="og:image" content="/fotos/image.png" /> {/* Ruta correcta a la imagen en la carpeta public */}
        <meta property="og:url" content="https://jefry-portfolio.netlify.app/" />
        <meta property="og:type" content="website" />
        
      </Head>

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
