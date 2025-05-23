import { useState, useEffect } from 'react';
import NumberComponent from "./NumberComponent";


function SecondCounter() {
    const [count, setCount] = useState(0);
    const [digitoDos, setDigitoDos] = useState(0);
    const [digitoTres, setDigitoTres] = useState(0);
    const [digitoCuatro, setDigitoCuatros] = useState(0);
    const [digitoCinco, setDigitoCinco] = useState(0);
    const [digitoSeis, setDigitoSeis] = useState(0);



    let clock = <i className="fa-regular fa-clock"></i>;


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + 1);
            if (count == 9) {
                setDigitoDos(digitoDos + 1)
                setCount(0)
                if (digitoDos == 9) {
                    setDigitoTres(digitoTres + 1)
                    setDigitoDos(0)
                    if (digitoTres == 9) {
                        setDigitoCuatro(digitoCuatro + 1)
                        setDigitoCinco(0)
                        if (digitoCuatro == 9) {
                            setDigitoCinco(digitoCinco + 1)
                            setDigitoCuatro(0)
                            if (digitoCinco == 9) {
                                setDigitoSeis(digitoSeis + 1)
                                setDigitoCinco(0)
                            }
                        }
                    }
                }
            }
            console.log(1); // Quieres incrementar el contador cada segundo...
        }, 1000)
        return () => clearInterval(intervalId);
    }, [count]);





    return (
        <div className="cloky">
            <div className="pantalla">
                <div className="d-flex justify-content-center align-items-center text-light px-5 ">
                    <NumberComponent number={clock} />
                    <NumberComponent number={digitoSeis} />
                    <NumberComponent number={digitoCinco} />
                    <NumberComponent number={digitoCuatro} />
                    <NumberComponent number={digitoTres} />
                    <NumberComponent number={digitoDos} />
                    <NumberComponent number={count} />
                </div>
            </div>
        </div>
    );
}

export default SecondCounter;