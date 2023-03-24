function getInfo() {
  const stopIdInput = document.getElementById('stopId');
  const busStopName = document.getElementById('stopName');
  const busList = document.getElementById('buses');
  const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

  busList.innerHTML = '';
  fetch(`${BASE_URL}${stopIdInput.value}`)
      .then((res) => res.json())
      .then((data) => {
          const {buses, name} = data;
          for (const busId in buses) {
              const busInfo = document.createElement('li');
              busInfo.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
              busList.appendChild(busInfo);
          }
          busStopName.textContent = name;
      })
      .catch(() => {
          busStopName.textContent = 'Error';
      });
}