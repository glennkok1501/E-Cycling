
const uuid = require('uuid');
const sharp = require('sharp');
const saveImage = async (image, path, w, h) => {

    const filename = image.name.replace(/\.[^.]*$/,'.webp')
    const server = `${process.env.HOST}:${process.env.PORT}`
    const filepath = `${path}/${uuid.v4()}-${filename}`
    
    await sharp(Buffer.from(image.data))
        .resize({
            height: h,
            width: w
        })
        .toFormat('webp')
        .withMetadata()
        .toFile(`./public/${filepath}`, (err, info) => {
            if (err) {
                console.log(err)
            }
        })
    return `${server}/${filepath}`
}

module.exports = {
    saveImage
}