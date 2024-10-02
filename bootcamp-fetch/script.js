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

getStarWarsPerson(5);