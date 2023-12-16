const Pixel = require('../models/pixel');


const updatePixel = async (x, y, value) => {
    let pixel = await Pixel.findOne({ x: x, y: y });
    if (pixel != null) {
        pixel.value = value;
        return await pixel.save();
    };

    pixel = new Pixel({
        x: x,
        y: y,
        value: value
    });
    return await pixel.save();
}

const getAllPixels = async () => {
    return await Pixel.find({}).select(["-_id","-__v"]);
}


module.exports = { updatePixel, getAllPixels };