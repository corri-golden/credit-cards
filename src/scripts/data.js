



const API = {
    getCardEntries () {
        return fetch("http://localhost:3000/cards")
            .then(response => response.json())
    },
    saveCardEntry: (newCardObject) => {
            return fetch("http://localhost:3000/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCardObject)
            })
        },
    deleteCard (cardId) {
        return fetch(`http://localhost:3000/cards/${cardId}`, {
            method: "DELETE"
    })
            .then(response => response.json())       
        },
        getSingleCardEntry(cardId) {
            // GET the card entry with the specified ID number
            return fetch(`http://localhost:3000/cards/${cardId}` )
                .then(response => response.json())
        },
        editSingleJournalEntry(cardId, entry){
            return fetch(`http://localhost:3000/cards/${cardId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
                })
            },
    }
    



export default API