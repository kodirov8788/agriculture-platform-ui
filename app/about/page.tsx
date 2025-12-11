import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "Jane Doe", role: "Example Role 1", image: "https://placehold.co/128x128/2D5016/FFFFFF?text=JD" },
    { name: "John Smith", role: "Example Role 2", image: "https://placehold.co/128x128/4A7C23/FFFFFF?text=JS" },
    { name: "Alex Johnson", role: "Example Role 3", image: "https://placehold.co/128x128/6B8E23/FFFFFF?text=AJ" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-agri-dark">
           {/* Placeholder for About Hero */}
           <Image 
             src="https://placehold.co/1920x1080/2D5016/FFFFFF?text=About+Us+Hero" 
             alt="About Us"
             fill
             className="object-cover opacity-50"
           />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-green-50">Example company description</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-agri-earth font-bold tracking-wider text-sm">OUR MISSION</span>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mt-2 mb-6">
              Cultivating a Better Tomorrow
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This is an example about section. Replace this text with your company mission and values.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Add your unique story and what makes your business special here.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-all duration-500">
             <Image 
               src="https://placehold.co/600x800/4A7C23/FFFFFF?text=About+Image" 
               alt="About Example"
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-agri-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-16">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-card shadow-sm hover:shadow-lg transition-all text-center group">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-green-50 group-hover:border-agri-green transition-all">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={128} 
                    height={128} 
                    className="w-full h-full object-cover"
                    unoptimized // External randomuser image
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-agri-green font-medium text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
