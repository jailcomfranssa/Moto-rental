import BMW from '../../assets/bmw.png';
import Honda from '../../assets/Honda-CBR.png';
import Ducati from '../../assets/Ducati.png';

const MotoDados = [
  {
    name: 'BMW',
    price: '100',
    image: BMW,
    aosDelay: '0',
  },
  {
    name: 'Honda',
    price: '100',
    image: Honda,
    aosDelay: '500',
  },
  {
    name: 'Ducati',
    price: '100',
    image: Ducati,
    aosDelay: '1000',
  },
];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {MotoDados.map((moto) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={moto.aosDelay}
                  key={moto.name}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                      src={moto.image}
                      alt={moto.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-primary font-semibold">{moto.name}</h2>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>R$: {moto.price}/Dia</p>
                      <a href="http://">Detalhes</a>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    12KM
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid place-content-center mt-10">
          <button data-aos="fade-up" className="button-outline">
            Começar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotoList;
