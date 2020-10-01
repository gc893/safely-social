const BASE_URL = "https://api.covidtracking.com/v1/states/";

function getStateResources() {
    return fetch(`${BASE_URL}info.json`).then((res) => res.json());
  }

  function getStateData() {
    return fetch(`${BASE_URL}current.json`).then((res) => res.json());
  }

  export default {
    getStateResources,
    getStateData
  };