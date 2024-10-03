// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/1");
//         const data2 = await res2.json();
//         console.log(data2);
//     } catch (e) {
//         console.log("ERROR!!!", e);
//     }
// }

// loadStarWarsPeople();

// axios.get("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("RESPONSE: ", res);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR!", e);
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' }};
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE"
    }

}

button.addEventListener('click', addNewJoke);

// getDadJoke();

// getStarWarsPerson(5);