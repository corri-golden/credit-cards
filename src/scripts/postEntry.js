import API from "./data.js"
import renderCards from "./cardDOM.js"





const saveObject = {
    postEntry () {
        const merNameInput = document.querySelector("#type").value
        const limitInput = document.querySelector("#creditLimit").value
        const usedInput = document.querySelector("#creditUsed").value
        const pointsInput = document.querySelector("#travelPoints").value 
        const interestRateInput = document.querySelector("#interestRate").value
        const pointsSpanInput = document.querySelector("#pointsSpan").value
    
    const newCardEntry = {
        "merchantName": merNameInput,
        "creditLimit": limitInput, 
        "creditUsed": usedInput,
        "travelPoints": pointsInput,
        "interestRate": interestRateInput,
        "pointsSpan": pointsSpanInput
    }
    console.log(newCardEntry)

    API.saveCardEntry(newCardEntry)
        .then(API.getCardEntries)
        .then(response => {renderCards(response)
            document.querySelector("#type").value = ""
            document.querySelector("#creditLimit").value = ""
            document.querySelector("#creditUsed").value = ""
            document.querySelector("#travelPoints").value = ""
            document.querySelector("#interestRate").value = ""
            document.querySelector("#pointsSpan").value = ""
    }
    )}



}

export default saveObject