const MotoList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        {/**Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Preços que caibam no seu bolso.
        </h2>
        <p data-aos="fade-up" className="text-sm pb-10">
          Alugue sua moto dos sonhos. Oferecemos motos novas a preços
          imbatíveis. Não perca nossas ofertas exclusivas
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16"></div>
        </div>
      </div>
    </div>
  );
};

export default MotoList;
