  const characterImg = [
    '../assets/im1.png',
    '../assets/im2.png',
    '../assets/im3.png',
    '../assets/im4.png',
    '../assets/im5.png',
]

const characterName = [
    'youu',
    'shinobu',
    'youreshie',
    'onohana',
    'rokya',
    'onohana',
    'rokya',
]


  const characterImgByIndex = (index)=>{
    return characterImg[index % characterImg.length]
  }

  const characterNameByIndex = (index)=>{
    return characterName[index % characterName.length]
  }

  export {characterImgByIndex,characterNameByIndex}