import React from 'react'

const TextOptions = ({ textOne, textTwo, setTextOne, setTextTwo, setColor, setFont }) => {

    const handleReset = () => {
        setTextOne('')
        setTextTwo('')
    }

    const handleCaps = () => {
        setTextOne(prev => prev.toUpperCase())
        setTextTwo(prev => prev.toUpperCase())
    }
    return (
        <>
            <div className="pb-4 flex">
                <div className="mx-2 ">
                    <label className="font-bold" htmlFor="text-1">Top-text:</label>
                    <input value={textOne} onChange={(e) => setTextOne(e.target.value)} className="border-transparent mx-2 rounded" placeholder="text-1" type="text" />
                </div>
                <div className="mx-2">
                    <label className="font-bold" htmlFor="text-2">Bottom-text:</label>
                    <input value={textTwo} onChange={(e) => setTextTwo(e.target.value)} className="border-transparent mx-2 rounded" type="text" placeholder="text-2" />
                </div>
                <button onClick={() => setColor('white')} className="bg-white px-4 rounded mr-4"></button>
                <button onClick={() => setColor('black')} className="bg-black px-4 rounded"></button>
            </div>
            <div className="flex justify-evenly gap-2 mb-4">
                <button onClick={handleReset} className="border-transparent rounded p-2 bg-indigo-400">Reset</button>
                <div>
                    <label className="mr-3 font-bold" htmlFor="select">Font:</label>
                    <select name="font" id="" onChange={(e) => setFont(e.target.value)}>
                        <option value="" selected >Default</option>
                        <option value="fantasy">fantasy</option>
                        <option value="monoscope">monoscope</option>
                        <option value="sans-serif">sans-serif</option>
                    </select>
                </div>

                <button onClick={handleCaps} className="border-transparent rounded p-2 bg-indigo-400">CAPS</button>
            </div>
        </>

    )
}

export default TextOptions