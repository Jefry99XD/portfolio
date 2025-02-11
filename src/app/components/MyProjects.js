"use client";
import { useState } from "react";
import Image from "next/image";



export default function MyProjects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section
      id="my-projects"
      className="p-8 bg-white rounded-lg shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Cards */}
        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/Gamejam.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Gj+"
            width={720}
            height={480}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/Gamejam.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">
            Gamejam Platform
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed for Gamejam+ Cidev using MEAN Stack to manage events
            locally and globally. Streamlined the process of submitting game
            forms for each event and stage. Developed with Mongo, Express,
            Angular, and NodeJS, using Oracle Cloud for deployment and CI/CD
            with GitHub Actions.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/hotel.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Hotel Platform"
            width={640}
            height={160}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/hotel.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">
            Hotel Platform
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            A system to view available hotels and plan reservations with
            check-in and check-out dates. Made in NodeJS together with HTML,
            CSS, and JavaScript, using PostgreSQL with Sequelize. Developed by a team of 14, divided
            into Backend, Frontend, and Documenter/Architects.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/recognicer.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Hotel Platform"
            width={640}
            height={160}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/recognicer.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">
            Car Recognizer
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed using Python, Flask, and Yolo for vehicle recognition
            using videos or images. Trained a convolutional neural network model
            with 5000 images to identify vehicle types: Auto, Motorcycle, Bus,
            Van, Truck, or Three-wheeled vehicle.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/compiler.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Hotel Platform"
            width={640}
            height={160}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/compiler.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">C Compiler</h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed using C. Compiler made in C for arithmetic operations. The
            operations are Addition, Subtraction, Multiplication, Division,
            Power, Pi, Sine, Cosine, Exponential, Logarithm. It has defined the
            semantic rules to read the corresponding instructions and define the
            types, in this case of each function and the data types. It uses a
            tokenizer for this purpose
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/char.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Hotel Platform"
            width={640}
            height={160}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/char2.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">C++ Charparty</h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed with C++ and NASM.
          CharParty is a turn-based game that consists of buying stars by moving across a map with a total of 50 squares.
        a map with a total of 50 squares, of which the first 25 are for sequential advancement, and the rest can be
        25 are sequential, and the rest can be accessed by means of special squares (5, 10, 15).
        special squares (5, 10, 15). The boxes have an associated color and can contain coins, stars or
        contain coins, stars or candies, which provide abilities to the player.
        The winner is the person who gets the most coins, stars or candies. The winner is the person who gets the most stars at the end of the game.
        of the game.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/collection.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Hotel Platform"
            width={640}
            height={160}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/collection.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">
            Car Collection Web System
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed using MEAN Stack. A web system for diecast car collectors
            to track collections across scales, connect with friends, view their
            collections, and chat with them.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <Image
            src="/fotos/bus.png" // Ruta de la imagen dentro de la carpeta 'public'
            alt="Hotel Platform"
            width={640}
            height={160}
            className="rounded mb-4 cursor-pointer"
            onClick={() => handleImageClick("/fotos/bus.png")} // Acción al hacer clic
          />
          <h3 className="text-lg font-semibold text-gray-700">
            Bus Tracker IoT
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Developed using Next.js with NODERED hosted on AWS. Web system to
            track buses. The reports that people make are shown on the map in
            the form of a bubble. The messages last as long as a user indicates
            that the trip is still active.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow p-4">
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-700">
            Mini Shopping Site
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Using NodeJS, and Cassandra, Revis, MongoDB and Neo4j. A project
            university when my team used 4 databases on a web project. This
            project was a shopping site, where users can login, search and buy
            products.
          </p>
        </div>
      </div>

      {/* Modal para ver la imagen en tamaño completo */}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6">
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="text-gray-600">
                ✖
              </button>
            </div>
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Selected Image"
                layout="intrinsic"
                width={640}
                height={480}
                className="rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
