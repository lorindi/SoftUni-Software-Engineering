function solve() {
    const info = document.querySelector('.info');
    const arriveBtn = document.getElementById('arrive');
    const departBtn = document.getElementById('depart');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stopId = 'depot';

    function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;

        fetch(`${BASE_URL}${stopId}`)
            .then((res) => res.json())
            .then((data) => {
                const {name} = data;
                info.textContent = `Next stop ${name}`;

            })
            .catch((err) => {
                alert(err);
            });
    }

    async function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        fetch(`${BASE_URL}${stopId}`)
            .then((res) => res.json())
            .then((data) => {
                const {name, next} = data;
                info.textContent = `Arriving at ${name}`;
                stopId = next;
            })
            .catch((err) => {
                alert(err);
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();