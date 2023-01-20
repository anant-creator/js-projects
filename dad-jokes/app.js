const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const url = "https://icanhazdadjoke.com/";


const fetchDadJoke = async() => {
    result.textContent = "Loading...";
    try {
        const response = await fetch(url, { 
            headers: {
                accept: 'application/json',
                'user-agent': 'learning app',
            },
        });
        if (!response.ok) {
            throw new Error("error");
        }
        const data = await response.json();
        result.textContent = data.joke;
    } catch(error) {
        result.textContent = "error here";
    }
}

btn.addEventListener('click', fetchDadJoke);