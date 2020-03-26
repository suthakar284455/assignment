import axios from "axios";

class Service {
  fetchScanDetails(url) {
    return axios.get(url);
  }

  fetchPatientDetails(url, param) {
    return axios.get(url, param);
  }

  SaveScanDetails(url, object, header) {
    return axios.post(url, object, header);
  }
}

export default (() => {
  let emitter;
  return {
    getInstance() {
      if (!emitter) {
        emitter = new Service();
      }
      return emitter;
    }
  };
})();
