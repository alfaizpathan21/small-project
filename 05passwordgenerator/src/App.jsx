import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [lenght, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //userRef hook
  const passwordRef=useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed)
      str +=
        " #, $, %, &";
    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [lenght, numberAllowed, charAllowed, setpassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)

  },[password])
  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div
        className="w-full max-w-md mx-auto
         shadow-md rounded-lg px-4 my-8 text-orange-600 
         bg-gray-700 text-center"
      >
        <h1
          className="text-white text-center
         my-3"
        >
          Password Generator
        </h1>
        <div
          className=' className=" flex shadow
         rounded-lg overflow-hidden mb-4 bg-white w-full
         "'
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-500 text-white
         px-3 py-0.5"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={lenght}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Lenght:{lenght}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
