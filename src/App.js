import { useEffect, useState } from "react";


function App() {
  const [selectedMeme, setSelectedMeme] = useState('')
  const [memes, setMemes] = useState([])
  const [showImage, setShowImage] = useState(false)
  const [textOne, setTextOne] = useState('')
  const [textTwo, setTextTwo] = useState('')
  const [color,setColor] = useState('')
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setMemes(data.data.memes))
  }, [])

  const handleImageClick = (e) => {
    setSelectedMeme(e.target.src)
    setShowImage(true)
  }
  const handleReset = () => {
    setTextOne('')
    setTextTwo('')
  }
  const handleCaps = () => {
    setTextOne(prev => prev.toUpperCase())
    setTextTwo(prev => prev.toUpperCase())
  }
  return (
    <div className="flex flex-col justify-center w-full items-center h-[100vh]">
      <h1 className="text-[30px] font-bold mt-12">Welcome to Meme generator</h1>
      <h2 className="text-[25px] my-8">Choose an Image to Start Creating</h2>
      <div className="flex flex-row overflow-scroll w-1/2 h-[200px] scrollbar-hide border-solid border-2 border-black p-2">
        {memes.map(meme => {
          return (
            <img onClick={handleImageClick} className="w-40 mx-4 cursor-pointer" key={meme.id} src={meme.url} alt={meme.name} />
          )
        })}
      </div>
      <div className=" my-10">
        <div className="pb-4 flex">
          <div className="mx-2 ">
            <label className="font-bold" htmlFor="text-1">Top-text:</label>
            <input value={textOne} onChange={(e) => setTextOne(e.target.value)} className="border-transparent mx-2 rounded" placeholder="text-1" type="text" />
          </div>
          <div className="mx-2">
            <label className="font-bold" htmlFor="text-2">Bottom-text:</label>
            <input value={textTwo} onChange={(e) => setTextTwo(e.target.value)} className="border-transparent mx-2 rounded" type="text" placeholder="text-2" />
          </div>
          <button onClick={()=> setColor('white')} className="bg-white px-4 rounded mr-4"></button>
          <button onClick={()=> setColor('black')} className="bg-black px-4 rounded"></button>
        </div>
        <div className="flex justify-evenly gap-2 mb-4">
          <button onClick={handleReset} className="border-transparent rounded p-2 bg-indigo-400">Reset</button>
          <button onClick={handleCaps} className="border-transparent rounded p-2 bg-indigo-400">CAPS</button>
        </div>
        <div className="relative">
          {showImage && <img className="w-full h-96 " src={selectedMeme} alt={selectedMeme} />}
          <p className="absolute top-0 left-8 font-bold text-lg" style={{color: color}}>{textOne}</p>
          <p className="absolute bottom-0 left-8 font-bold text-lg" style={{color: color}}>{textTwo}</p>
        </div>

      </div>
    </div>

  );
}

export default App;
