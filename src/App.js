import { useState } from "react";
import Greeting from "./components/Greeting";
import Memes from "./components/Memes";
import SelectedMemeImage from "./components/SelectedMemeImage";
import TextOptions from "./components/TextOptions";


function App() {
  const [selectedMeme, setSelectedMeme] = useState('')
  const [showImage, setShowImage] = useState(false)
  const [textOne, setTextOne] = useState('')
  const [textTwo, setTextTwo] = useState('')
  const [color, setColor] = useState('')
  const [font, setFont] = useState('')

  return (
    <div className="flex flex-col justify-center w-full items-center h-[100vh]">
      <Greeting />
      <Memes
        setSelectedMeme={setSelectedMeme}
        setShowImage={setShowImage}
      />
      <div className=" my-10">
        <TextOptions
          textOne={textOne}
          textTwo={textTwo}
          setColor={setColor}
          setFont={setFont}
          setTextOne={setTextOne}
          setTextTwo={setTextTwo}
        />
        <SelectedMemeImage
          textOne={textOne}
          textTwo={textTwo}
          selectedMeme={selectedMeme}
          showImage={showImage}
          color={color}
          font={font} />

      </div>
    </div>

  );
}

export default App;
