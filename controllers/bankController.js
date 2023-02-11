const request = require('request');
const FLUTTERWAVE_BASE_URL='https://api.flutterwave.com/v3';

const flutterwaveEndpoints={
    NIP_BANKS : '/banks/NG'
}

exports.getBanks = async(req, res) => {
    const url = FLUTTERWAVE_BASE_URL.concat(flutterwaveEndpoints.NIP_BANKS);
    request({
        url,
        headers: {
            Authorization: 'Bearer FLWSECK_TEST-c5b9df66d6b4f3255684ac5371b059f8-X'
          }

    }).pipe(res);
};