import { useEffect, useState } from "react";
import logo from "./assets/8.svg";
import cryptologo from "./assets/cryptocurrencylogo.svg";

function App() {
  let default_value,
    currency_value,
    fixvalue,
    result = 0;

  default_value = "aave";

  const [currencytypeone, currencysetone] = useState("1inch");
  const [currencytypetwo, currencysettwo] = useState("1inch");
  const [inputvalue, inputsetvalue] = useState("");
  const [outputbox, outputvalue] = useState("");
  const [currencies, setcurrencies] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${default_value}.json`,
      {
        method: "GET",
      }
    ).then((fetch_data) =>
      fetch_data.json().then((data) => {
        const each_data = data.aave;
        const keys = Object.keys(each_data);
        setcurrencies(keys);
      })
    );
  }, []);

  function Calculation() {
    if (currencytypeone && currencytypetwo && inputvalue) {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencytypeone}.json`,
        {
          method: "GET",
        }
      ).then((fetch_data) =>
        fetch_data.json().then((keydata) => {
          currency_value = keydata[currencytypeone][currencytypetwo];
          fixvalue = inputvalue * currency_value;
          result = fixvalue.toFixed(6);
          outputvalue(result);
        })
      );
    }
  }
  function swap() {
    currencysetone(currencytypetwo);
    currencysettwo(currencytypeone);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-slate-50  opacity-100 pl-7 pr-7 pt-9 pb-10 rounded-xl md:pt-10 md:pb-14 md:pl-12 md:pr-12 border-slate-600 border-[1px] border-solid shadow-2xl">
          <div className="flex justify-center items-center mb-7 gap-6">
            <div>
              <img className="md:w-24 md:h-24 w-20 h-20 text-center" src={cryptologo} alt="" />
            </div>
            <div className="uppercase font-sans font-extrabold md:font-bold md:text-xl text-lg text-slate-600 ">
              <h1 className="first-letter:text-yellow-300">crypto</h1>
              <h1 className="first-letter:text-blue-400"> currency</h1>
              <h1 className="first-letter:text-yellow-300">converter</h1>
            </div>
          </div>

          <div className="flex justify-center items-center mb-7">
            <input
              id="inputboxone"
              type="text"

              value={inputvalue}
              onChange={(event) => {
                inputsetvalue(event.target.value);
              }}
              className="md:h-12 md:w-64 w-[205px] h-10 focus:outline-none pl-4 font-sans font-semibold text-lg rounded-tl-lg rounded-bl-lg  border-slate-600 border-[1px] border-solid"
            ></input>
            <select
              className="bg-slate-600 text-white  pl-2 block md:w-full md:h-12 h-10 focus:outline-none overflow-hidden text-center uppercase border-slate-600 border-2 border-solid rounded-tr-lg rounded-br-lg hover:bg-slate-700 hover:border-slate-700"
              name=""
              id="listone"
              onChange={(event) => {
                currencysetone(event.target.value);
              }}
              value={currencytypeone}
            >
              {currencies.map((currency) => (
                <option value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={swap}>
              <img
                className="md:w-[65px] md:h-[65px] w-14 h-14  hover:opacity-80"
                src={logo}
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-center items-center mb-10 mt-7">
            <input
              id="inputboxtwo"
              type="text"
              value={outputbox}
              readOnly
              className="md:h-12 md:w-64  w-[205px] h-10 focus:outline-none pl-4 font-sans font-semibold text-lg rounded-tl-lg rounded-bl-lg border-slate-600 border-[1px] border-solid"
            ></input>
            <select
              className="bg-slate-600 text-white block w-full pl-2 md:h-12 h-10 focus:outline-none  overflow-hidden text-center uppercase border-slate-600 border-2 border-solid rounded-tr-lg rounded-br-lg hover:bg-slate-700 hover:border-slate-700"
              name=""
              id="listtwo"
              onChange={(event) => {
                currencysettwo(event.target.value);
              }}
              value={currencytypetwo}
            >
              {currencies.map((currency) => (
                <option value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center text-center">
            <button
              onClick={Calculation}
              className="bg-yellow-300 text-slate-700 md:pt-3 md:pb-3 md:pl-5 md:pr-5  pt-2 pb-2 pl-3 pr-3 rounded-lg font-sans capitalize font-semibold  border-slate-600 border-[1px] border-solid hover:bg-yellow-400"
            >
              convert
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="font-sans font-semibold md:text-base text-sm text-white capitalize mb-9">made with &#10084; by abhiraj</p>
      </div>
    </>
  );
}

export default App;
