// const api_token = "IJbXDHzuh5bsMKYthQZL2LTvAuPxifeXs1R0tUgp";
// const url = `https://api.thenewsapi.com/v1/news/top?api_token=${api_token}`;

// async function getData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }

// getData();

const api_token = "nMFyXywc7UL2QZFfiAY6OQ==6Ta1eKwYemEq3kGb";
const url = "https://api.api-ninjas.com/v2/quotes?categories=success,wisdom";

async function getData() {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Api-Key": api_token
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`${data[0].quote} — ${data[0].author}`);

        const quoteElement = document.getElementById("quote");
        quoteElement.textContent = `${data[0].quote} — ${data[0].author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").textContent = "Failed to load quote.";
    }
}

getData();
