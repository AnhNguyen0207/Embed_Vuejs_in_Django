import axios from 'axios'
const callApi = function (url, options) {
    // const accessToken = localStorage.getItem(`token`);
    if (options.headers) {
        if (!options.headers['Content-Type']) {
            Object.assign(options.headers, {'Content-Type': 'application/json'});
        }
    } else {
        options.headers = {
            'Content-Type': 'application/json',
        };
    }
    ;

    return axios(url, options)
        .then((response) => {
                return response;
        })
        .catch((error) => {
            return error
        });
};

export default callApi