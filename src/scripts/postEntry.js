import API from "./data.js"
import renderCards from "./cardDOM.js"





const saveObject = {
    postEntry () {
        const merNameInput = document.querySelector("#merchantName").value
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
            document.querySelector("#merchantName")
            document.querySelector("#creditLimit")
            document.querySelector("#creditUsed")
            document.querySelector("#travelPoints")
            document.querySelector("#interestRate")
            document.querySelector("#pointsSpan")
    }
    )}



}

export default saveObject