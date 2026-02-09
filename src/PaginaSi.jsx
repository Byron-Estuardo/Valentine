import "./flower.css";
import "./index1.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PaginaSi() {
    const navigate = useNavigate();
    useEffect(() => {
        document.body.classList.remove("fade-out");
    }, []);

    return (
        <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen selection:bg-rose-600 selection:text-white text-zinc-900 page">
            <button
                className="bg-pink-300 hover:bg-pink-600 rounded-lg text-white font-bold py-2 px-4 mt-6">
                    Te amo ❤️ (Eres el amor de mi vida)
            </button>
        <div id="thankyou">
            <span>Gracias por llegar a mi vida y cambiarla de la forma más bonita...</span>
            <strong>Mi corazón es tuyo, hoy, mañana y siempre ❤️</strong>
        </div>
        <div className="flower-container">
            <div className="flower">
            <div className="f-wrapper">
                <div className="flower__line"></div>
                <div className="f">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__leaf flower__leaf--5" />
                <div className="flower__leaf flower__leaf--6" />
                <div className="flower__leaf flower__leaf--7" />
                <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow" />
                </div>
            </div>

            <div className="f-wrapper f-wrapper--2">
                <div className="flower__line"></div>
                <div className="f">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__leaf flower__leaf--5" />
                <div className="flower__leaf flower__leaf--6" />
                <div className="flower__leaf flower__leaf--7" />
                <div className="flower__leaf flower__leaf--8 flower__fall-down--pink" />
                </div>
            </div>

            <div className="f-wrapper f-wrapper--3">
                <div className="flower__line"></div>
                <div className="f">
                <div className="flower__leaf flower__leaf--1" />
                <div className="flower__leaf flower__leaf--2" />
                <div className="flower__leaf flower__leaf--3" />
                <div className="flower__leaf flower__leaf--4" />
                <div className="flower__leaf flower__leaf--5" />
                <div className="flower__leaf flower__leaf--6" />
                <div className="flower__leaf flower__leaf--7" />
                <div className="flower__leaf flower__leaf--8 flower__fall-down--purple" />
                </div>
            </div>

            <div className="flower__glass"></div>
           
            </div>
        </div>
        
        </div>
        
    );
}
