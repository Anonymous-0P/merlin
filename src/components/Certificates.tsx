const Certificates = () => {
  const cards = [
    {
      image: "/cert-35-logo.png",
      title: "35+ Years of Quality & Trust"
    },
    {
      image: "/cert-make-india-logo.png",
      title: "Make in India"
    },
    {
      image: "/cert-iso-logo.png",
      title: "ISO 9001:2008 Quality Certification"
    }
  ];

  return (
    <section id="certifications" className="bg-merlin-ivory py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-merlin-sage/25 bg-merlin-gray p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.14)]"
            >
              <div className="absolute left-0 top-0 h-1.5 w-28 rounded-br-full bg-merlin-blue" />
              <div className="absolute bottom-0 right-0 h-1.5 w-28 rounded-tl-full bg-merlin-blue" />

              <img
                src={card.image}
                alt={`${card.title} logo`}
                className="h-44 w-full max-w-[260px] object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.14)]"
              />
              <h3 className="mt-8 max-w-[300px] text-2xl font-black leading-tight tracking-tight text-black">
                {card.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
