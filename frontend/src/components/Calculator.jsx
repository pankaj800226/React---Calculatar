import { useState } from "react"

const Calculator = () => {
    const [result, setResult] = useState('')

    // All Button clicks logic
    const clickHandle = (e) => {
        setResult(result.concat(e.target.value))
    }

    // screen clear logic
    const clearData = () => {
        setResult("")
    }

    // calculate number
    const Calculate = () => {
        setResult(eval(result.toString()))
    }
    return (
        <div className="bg-gray-800 text-white h-screen w-screen flex justify-center items-center">
            <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
                <div className="screen p-2">
                    <input type="text" value={result} className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 bg-gray-100 pt-10 outline-none text-right text-2xl rounded-lg" placeholder="0" />
                </div>
                <div className="brand bg-gray-200 bg-opacity-90 mb-2">
                    <h1 className="text-gray-900 text-xm font-bold text-center">Pankaj</h1>
                </div>

                {/* KeyBords  */}
                <div className="keyboard">
                    <div className="flex justify-between m-2">
                        <input type="button" value='C' className="bg-red-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clearData} />
                        <input type="button" value='<' className="bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='%' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='/' className="bg-pink-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                    </div>
                    {/* Second  */}
                    <div className="flex justify-between m-2">
                        <input type="button" value='7' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='8' className="bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='9' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='*' className="bg-green-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                    </div>

                    {/* Third  */}
                    <div className="flex justify-between m-2">
                        <input type="button" value='4' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='5' className="bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='6' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='-' className="bg-indigo-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                    </div>

                    {/* Forth  */}
                    <div className="flex justify-between m-2">
                        <input type="button" value='1' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='2' className="bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='3' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='+' className="bg-pink-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                    </div>

                    {/* Five  */}
                    <div className="flex justify-between m-2">
                        <input type="button" value='0' className="bg-red-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='00' className="bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='.' className="bg-gray-300 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={clickHandle} />
                        <input type="button" value='=' className="bg-yellow-200 w-12 h-12 rounded-lg text-center text-black font-medium cursor-pointer" onClick={Calculate} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator