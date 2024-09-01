import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const skillsData = [
  {
    name: 'Melhor preço',
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: '#',
    description: 'Conheça os melhores preços para sua moto.',
    aosDelay: '0',
  },
  {
    name: 'Experiência',
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: '#',
    description: 'Conheça a nossa experiência em alugar motos.',
    aosDelay: '500',
  },
  {
    name: 'Segurança',
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: '#',
    description: 'Asegure-se de que você não perca nada durante o seu aluguel.',
    aosDelay: '1000',
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Por que nos escolher
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((data, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${data.aosDelay}`}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-black hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{data.icon}</div>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <a href={data.link}>Saber mais</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
