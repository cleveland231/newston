const fetchStories = () => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4avDpdFXu1EGb9etx6oEDvv1on0qxTMm`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

const fetchOptionStories = (option) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${option}.json?api-key=4avDpdFXu1EGb9etx6oEDvv1on0qxTMm`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText)
            } else {
                return response.json()
            }
        })
}

export {fetchStories, fetchOptionStories};

