import React, { useEffect, useState } from 'react'

const Memes = ({ setSelectedMeme, setShowImage }) => {
    const [memes, setMemes] = useState([])
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setMemes(data.data.memes))
    }, [])
    const handleImageClick = (e) => {
        setSelectedMeme(e.target.src)
        setShowImage(true)
    }
    return (
        <div className="flex flex-row overflow-scroll w-1/2 h-[200px] scrollbar-hide border-solid border-2 border-black p-2">
            {memes.map(meme => {
                return (
                    <img onClick={handleImageClick} className="w-40 mx-4 cursor-pointer" key={meme.id} src={meme.url} alt={meme.name} />
                )
            })}
        </div>
    )
}

export default Memes