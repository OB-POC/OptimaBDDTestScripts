//select environment

module.exports = {

    getBaseURL: function (environment, service) {
        let port;
        switch (service) {
            case "auth":
                port = "3000";
                break;
            case "account":
                port = "3001";
                break;
            case "bestplan":
                port = "3002";
                break;
            case "offering":
                port = "3003";
                break;
            default:
                port = "3000";
        }

        if (environment === "local") {
            url = "http://localhost:" + port;
        }
        else if (environment === "ST03") {
            url = "http://ST03:" + port;
        }
        else if (environment === "CIT03") {
            url = "http://CIT03:" + port;
        }

        return url;
    }
};