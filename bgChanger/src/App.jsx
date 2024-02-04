import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("black");

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button 
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500 hover:bg-red-700">
                Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500 hover:bg-blue-700">         
                Blue
            </button>
            <button 
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500 hover:bg-green-700">           
                Green
            </button>
            <button 
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-500 hover:bg-yellow-700">              
                Yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500 hover:bg-orange-700">
                Orange
              </button>             
            <button 
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-pink-500 hover:bg-pink-700">
                Pink
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500 hover:bg-purple-700">               
                Purple
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white-500 hover:bg-transparent">               
                White
            </button>          
          </div>
        </div>

    </div>
  )
}

export default App
