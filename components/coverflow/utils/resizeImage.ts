// https://stackoverflow.com/questions/1106339/resize-image-to-fit-in-bounding-box
const resizeImage = (height: number, width: number, image: HTMLImageElement) => {
  const widthScale = width > 0 ? width / image.width : 1
  const heightScale = height > 0 ? height / image.height : 1
  const scale = Math.min(widthScale, heightScale)
  return {
    height: image.height * scale,
    width: image.width * scale,
  }
}

export default resizeImage
