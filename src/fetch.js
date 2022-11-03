const fetchStories = () => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=CPsvMTlNwQHXHAeGmFuCiYT0bfWNhOA3`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

const fetchOptionStories = async (option) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${option}.json?api-key=CPsvMTlNwQHXHAeGmFuCiYT0bfWNhOA3`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

export {fetchStories, fetchOptionStories};

