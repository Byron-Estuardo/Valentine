import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gif1 from "/1.gif";
import gif2 from "/2.gif";
import gif3 from "/3.gif";
import gif4 from "/4.gif";
import gif5 from "/5.gif";
import gif6 from "/7.gif";

export default function Page() {
  const gifs = [
  gif1,
  gif2,
  gif3,
  gif4,
  gif6,
  gif5
];
  const [contadorNo, setContadorNo] = useState(0);
  const [indiceGif, setIndiceGif] = useState(0);
  const [visible, setVisible] = useState(true);
  const tamanioBotonSi = contadorNo * 10 + 16;
  const navigate = useNavigate();

  const manejarClickNo = () => {
    setContadorNo(contadorNo + 1);
  };

  const textoBotonNo = () => {
    const frases = [
      "No",
      "¿Estás segura?",
      "¿Muy segura?",
      "¡Piénsalo otra vez!",
      "¡Última oportunidad!",
      "¿Segura que no?",
      "¡Podrías arrepentirte eh!!",
      "¡Piénsalo otra vez porfavorrrrrrrr!",
      "¿Estás completamente segura?",
      "¡Esto podría ser un error!",
      "¡Ten corazón!",
      "Osea que no me amas?!",
      "¿Cambio de opinión?",
      "¿No lo reconsiderarías?",
      "¿Es tu respuesta final?",
      "Me estás rompiendo el corazón :(",
      "¿De verdad es tu última palabra?",
      "Ay… eso dolió :(",
      "¿Ni un poquito de duda?",
      "Vamos, di que sí 🥺",
      "¿Segurísima, segurísima?",
      "¡Piénsalo con cariño!",
      "No me hagas esto 😔",
      "¿Y si lo intentas otra vez?",
      "Por faaa 🙏",
      "¿Ni siquiera lo vas a pensar?",
      "Eso sonó muy definitivo 😢",
      "¿Estás segura de querer decir que no?",
      "Di que sí, no pasa nada 😉",
      "¿Última respuesta… de verdad?",
      "Me rompes el corazoncito 💔",
      "Plisss 🥺",
      "¿No hay chance?",
      "¿Cero posibilidad?",
      "¿Ni un tal vez?",
      "Vamos, reconsidera 😔",
      "¿Tan fácil me dices que no?",
      "Eso fue un poquito cruel :(",
      "¿Segura que no quieres cambiar de opinión?",
      "Plsss? :( Si me amaras dirias que sí!!"
    ];

    return frases[Math.min(contadorNo, frases.length - 1)];
  };
  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndiceGif((prev) => (prev + 1) % gifs.length);
        setVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [gifs.length]);

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      <>
          <img
            src={gifs[indiceGif]}
            alt="gif animado"
            
            className={`h-48 transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
          <h1 className="text-4xl md:text-4xl mt-4 mb-1 text-center">
            Este San Valentín no se trata de flores ni fechas… se trata de ti!!
          </h1>
          <h1 className="text-4xl md:text-4xl mt-0 mb-6 text-center">
            ¿Quieres ser mi San Valentín?
          </h1>

          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style={{ fontSize: tamanioBotonSi }}
              onClick={() => navigate("/si")}
            >
              Si!
            </button>
            <button
              onClick={manejarClickNo}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {contadorNo === 0 ? "No, wakala" : textoBotonNo()}
            </button>
          </div>
        </>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full
                  backdrop-blur-md bg-white/70
                  border-t border-rose-300
                  px-4 py-3
                  text-sm text-center
                  leading-snug
                  opacity-95"
    >
      <span className="block font-medium">
        Hecho con amor, porque te mereces mucho más de lo que imaginas
      </span>
      <span className="block mt-1">
        Te mereces amor sincero, detalles hechos con intención y alguien que nunca deje de recordarte lo increíble que eres, incluso cuando tú no lo veas ❤️
      </span>
    </div>
  );
};

