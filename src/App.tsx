import { useState } from "react";
import logo from "./assets/Apeiro-Logo-768x296.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="flex justify-center items-center w-screen h-screen overflow-hidden bg-gray-200">
        <div className="md:w-3/4 lg:w-1/2 min-h-[75vh] bg-white border-b-8 border-b-red-600 rounded-lg shadow-lg p-5 flex justify-center items-center">
          <div className=" flex flex-col items-center gap-3 py-5">
            <img src={logo} alt="Logo" width="350px" />
            <h3>Coming Soon!</h3>
            <p>
              Contact:{" "}
              <a href="mailto:contact@apeiro.ca" className="text-gray-500">
                contact@apeiro.ca
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
