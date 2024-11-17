import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}|<>?/~"

    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  // return (
  //   <>
  //   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
  //     <h1 className='text-white text-center my-3 py-4'>Password generator</h1>
  //     <div className='flex shadow rounded-lg overflow-hidden mb-4'></div>
  //     <input type="text" value={password} className='outline-none w-full rounded-lg py-3 px-3 my-4' placeholder='Password'
  //     readOnly/>
  //     <button
  //     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  //   </div>
  //   <div className='flex text-sm gap-x-2'>
  //     <div className='flex items-center gap-x-1'>
  //       <input type="range" 
  //       min={6}
  //       max={100}
  //       value={length}
  //       className='cursor-pointer'
  //       />
  //       <label>length: {lengh}</label>
  //     </div>
  //   </div>
  //   </>
  // )

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/nJg467QyZ3OvWL5Cw6mMAOaMteDKNmqr-70dFxAeLWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83Mi84/OS8waXd4QUYuanBl/Zw')`,
        }}
      >
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 bg-gray-600 bg-opacity-80 text-orange-500">
          <h1 className="text-white text-center text-2xl font-bold mb-6">
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
              className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col items-start text-white text-sm">
            <div className="w-full flex items-center justify-between mb-2">
              <label htmlFor="length" className="font-semibold">
                Password Length:
              </label>
              <span>{length}</span>
            </div>
            <input
              type="range"
              id="length"
              min={6}
              max={100}
              value={length}
              className="w-full cursor-pointer accent-blue-700"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'></div>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="charcterInput"
            onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="characterInput">Charcters</label>
        </div>
      </div>
    </>
  )
}

export default App
