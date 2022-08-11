const { RESTDataource } = require('apollo-datasource-rest');


class TrackAPI extends RESTDataource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"
    }

    getTracksForHome() {
        return this.get("tracks");
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`)
    }
}

module.exports = TrackAPI;