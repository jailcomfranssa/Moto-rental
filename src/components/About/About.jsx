import MotoAbout from "../../assets/MotoAbout.png";

const About = () => {
  return <div className="dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-100" >
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div 
                data-aos="slide-right"
                data-aos-duration="1500"
            >
                <img src={MotoAbout} alt="" className="rounded-lg sm:scale-105 sm:translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0.50)]"/>
            </div>
            <div>
                <div className="space-y-5 sm:p-16 pb-6">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">Sobre Nos</h2>
                    <p data-aos="fade-up">
                    Somos apaixonados por duas rodas e estamos aqui para proporcionar a você a liberdade de explorar o mundo com agilidade e estilo. seja para uma aventura emocionante ou para facilitar o seu dia a dia.
                    </p>
                    <p data-aos="fade-up">
                        Acreditamos que cada viagem deve ser única e especial. Por isso, trabalhamos para tornar sua experiência de aluguel simples, rápida e confiável.
                    </p>
                    <button data-aos="fade-up" className="button-outline">
                        Começar
                    </button>
                </div>
            </div>

        </div>
    </div>
  </div>
}

export default About