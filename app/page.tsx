import Image from 'next/image';

export default function ProgrammerPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hola, soy <span className="text-blue-600">[Tu Nombre]</span>
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Desarrollador Full Stack | Especialista en [Tu Tecnología]
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Creo soluciones digitales robustas y escalables con código limpio y arquitecturas modernas.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md">
                Contactar
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-colors">
                Ver Proyectos
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/profile-pic.jpg" // Reemplaza con tu imagen
                alt="Foto de perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mis <span className="text-blue-600">Habilidades</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js',
              'Node.js', 'Express', 'Python', 'Django',
              'SQL', 'MongoDB', 'Docker', 'AWS',
              'Git', 'CI/CD', 'GraphQL', 'REST APIs'
            ].map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Proyectos <span className="text-blue-600">Destacados</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sistema de Gestión",
                description: "Plataforma empresarial con dashboard analítico",
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "E-commerce",
                description: "Tienda online con pasarela de pagos",
                tech: ["Next.js", "Stripe", "PostgreSQL"]
              },
              {
                title: "App de Productividad",
                description: "Gestión de tareas con IA integrada",
                tech: ["Python", "Django", "React Native"]
              }
            ].map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  Vista Previa
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <span className="text-blue-600">Contacto</span>
          </h2>
          
          <form className="bg-white p-8 rounded-xl shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="tu@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}