const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=l_UpDsvZ3GSImYr9JzBNcKOgbOcE7U6tszvXS3QPDjo&searchtext=${encodedUrl }`)
   
    if(!Object.keys(resp.data.Response.View).length) {
        throw new Error(`No hay resultados para la ciudad "${ direccion }"`);
    }
    let location = resp.data.Response.View[0].Result[0].Location;
    let coors = location.NavigationPosition[0];
    
    return {
        direccion: location.Address.Label,
        lat: coors.Latitude,
        lng: coors.Longitude
    }
}

module.exports = {
    getLugarLatLng
}