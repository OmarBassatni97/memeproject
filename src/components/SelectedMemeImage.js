import React from 'react'

const SelectedMemeImage = ({ selectedMeme, textOne, textTwo, showImage, color, font }) => {
    return (
        <div className="relative">
            {showImage && <img className="w-full h-96 " src={selectedMeme} alt={selectedMeme} />}
            <p className="absolute top-0 left-8 font-bold text-[25px]" style={{ color: color, fontFamily: font }}>{textOne}</p>
            <p className="absolute bottom-0 left-8 font-bold text-[25px]" style={{ color: color, fontFamily: font }}>{textTwo}</p>
        </div>
    )
}

export default SelectedMemeImage