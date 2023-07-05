export default class CurrentLocation {
    constructor() {
        this._name = "Current Location";
        this._lat = null;
        this._lon = null;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getLat() {
        return this._lat;
    }

    setLat(lat) {
        this._lat = lat;
    }

    getLon() {
        return this._lon;
    }

    setLon(lon) {
        this._lon = lon;
    }
}