"use client";
export default function Aboutussection({ isHomepage = false }) {
  const companydetails = [
    {
      id: 1,
      title: "SquareUp has been Instrumental in Transforming our Online Presence.",
      description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have significantly increased since we started working with SquareUp.",
      name: "John Smith",
      position: "CEO of ChicBoutique",
      avatar: "JS",
      bgColor: "bg-lime-400",
    },
    {
      id: 2,
      title: "Working with SquareUp was a breeze.",
      description: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
      name: "Sarah Johnson",
      position: "Founder of HungryBites",
      avatar: "SJ",
      bgColor: "bg-lime-400",
    },
    {
      id: 3,
      title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
      description: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and improved our clients' event experiences.",
      name: "Mark Thompson",
      position: "CEO of EventMasters",
      avatar: "MT",
      bgColor: "bg-lime-400",
    },
    {
      id: 4,
      title: "ProTech Solutions turned to SquareUp to automate our workflow",
      description: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
      name: "Laura Adams",
      position: "CTO of ProTech Solutions",
      avatar: "LA",
      bgColor: "bg-lime-400",
    },
{
      id: 5,
      id: 5,
      title: "ProTech Solutions turned to SquareUp to automate our workflow",
      description: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
      name: "Laura Adams",
      position: "CTO of ProTech Solutions",
      avatar: "LA",
      bgColor: "bg-lime-400",
    },
{
      id: 6,
      title: "ProTech Solutions turned to SquareUp to automate our workflow",
      description: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
      name: "Laura Adams",
      position: "CTO of ProTech Solutions",
      avatar: "LA",
      bgColor: "bg-lime-400",
    },


  ];

  return (
    <div
      className="bg-black overflow-hidden"
      style={{ height: isHomepage ? "170vh" : "auto" }}
    >
      <div
        className="mx-auto border border-gray-600 bg-black"
        style={{
          width: "1596px",
          minHeight: isHomepage ? "100%" : "2046px",
          maxWidth: "100vw",
          border: "1px solid #262626",
        }}
      >
        <div className="text-center pt-16 pb-20 px-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            What our Clients say About us
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here&apos;s what some of our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        <div className="px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {companydetails.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-lime-400 transition-all duration-300"
              >
                <div className="mb-8">
                  <h3 className="text-lime-400 text-xl font-semibold mb-4 leading-tight">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-black font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-sm">
                    Open Website
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1596px) {
          .testimonials-container {
            width: 100% !important;
            margin: 0 1rem;
          }
        }

        @media (max-width: 1024px) {
          .testimonials-container {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-container {
            padding: 1rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
