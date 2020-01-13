
const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6a5ba7b5b2851a9d8a72ee2e073300a6`)
    if(resp.data.cod === 400) throw new Error(`No hay datos para la latitud: ${lat} y longitud: ${lng}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}