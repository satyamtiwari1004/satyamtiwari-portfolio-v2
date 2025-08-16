import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="p-8">
        <h1 className="text-4xl font-bold text-center">
          Satyam's Portfolio
        </h1>
        <p className="text-center mt-4 text-lg">
          Welcome to my portfolio website!
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-slate-600">
            I'm a software engineer passionate about crafting user-friendly, scalable, and visually appealing applications. 
            With 4.5 years of hands-on experience, I enjoy solving challenging problems, building intuitive UIs, 
            and experimenting with creative interactions.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'TypeScript', 'Python', 'Django', 'TailwindCSS', 'Framer Motion', 'Node.js', 'PostgreSQL'].map((skill) => (
              <div key={skill} className="bg-slate-100 p-4 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Pricey – Smart Price Tracker</h3>
              <p className="text-slate-600">A comprehensive e-commerce price tracking application built with Python and Django.</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">SpringBootRevision</h3>
              <p className="text-slate-600">A comprehensive sandbox project demonstrating JPA, Security, and microservice patterns.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>© 2024 Satyam Rajesh Tiwari. Built with React and TailwindCSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
