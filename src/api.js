import axios from 'axios';
import querystring from 'querystring';

let URL = 'https://api.bilimseferberligi.org/api/v1/';

export default {
  donationList(){
    return axios.get(URL + 'donation/list')
    .then(response => {
      return response.data;
    });
  },
  infoCreate(data) {
    return axios.post(URL + 'donation/info/create', data).then(response => {
      return response.data;
    });
  },
  paymentTeksefer(data) {
    return axios.post(URL + 'donation/payment/single', data).then(response => {
      return response.data;
    });
  },
  paymentDuzenli(data) {
    return axios.post(URL + 'donation/payment/subscription', data).then(response => {
      return response.data;
    });
  },
  checkStatus(data) {
    return axios.post(URL + 'donation/payment/conversation/check', data).then(response => {
      return response.data;
    });
  },
  subscribe(data) {
    return axios.post(URL + 'newsletter/add', data).then(response => {
      return response.data;
    });
  },
  homeData() {
    return axios.get(URL + 'home').then(response => {
      return response;
    });
  },

}
