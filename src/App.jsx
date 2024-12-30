import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}|<>?/~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

 
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/nJg467QyZ3OvWL5Cw6mMAOaMteDKNmqr-70dFxAeLWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83Mi84/OS8waXd4QUYuanBl/Zw')`,
        }}
      >
        <div
          className="w-full max-w-md mx-auto rounded-lg px-6 py-8 shadow-[0_0_1rem_rgba(17,16,16,1)] bg-transparent border-2 border-white/5 backdrop-blur-sm"
        >
          <h1 className="text-center text-2xl font-bold mb-6">
            Password Generator
          </h1>

          <div className="mb-6">
            <input
              type="text"
              value={password}
              className="w-full rounded-lg py-3 px-4 bg-gray-900 text-white text-lg outline-none mb-4"
              placeholder="Your Password"
              readOnly
            />
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={() => navigator.clipboard.writeText(password)}
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col items-start text-sm">
            <div className="w-full flex items-center justify-between mb-2">
              <label htmlFor="length" className="font-semibold text-sm sm:text-base">
                Password Length:
              </label>
              <span className="text-sm sm:text-base">{length}</span>
            </div>
            <input
              type="range"
              id="length"
              min={6}
              max={100}
              value={length}
              className="w-full cursor-pointer accent-blue-700"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="text-sm sm:text-base">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="characterInput"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="text-sm sm:text-base">
                Include Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

