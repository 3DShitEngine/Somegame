const url = "https://raw.githubusercontent.com/3DShitEngine/Somegame/refs/heads/main/html.txt";

fetch(url)
    .then(response => {
        if (!response.ok) throw new Error(`errored lmao, status: ${response.status}`);
        return response.text();
    })
    .then(text => {
        document.write(text);
        console.log(text);    // also logs to console just incase
    })
    .catch(err => console.error("Error fetching file:", err));

