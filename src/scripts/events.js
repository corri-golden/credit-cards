import API from "./data.js"
import renderCards from "./cardDOM.js"
import defaultElements from "./createForm.js"




const entryList = document.querySelector("#cardLog")

export default {
    deleteListener () {
        entryList.addEventListener("click", event => {
            
        if (event.target.id.startsWith("deleteCard--")) {
                const cardToDelete = event.target.id.split("--")[1]
                console.log(cardToDelete, "card")
        API.deleteCard(cardToDelete)
            .then(API.getCardEntries)
            .then(response => {renderCards(response)})
            }
        })
    },
    editListener() {
        entryList.addEventListener("click", event => {
        if(event.target.id.startsWith("editCard--")) {
            const cardToEdit = event.target.id.split("--")[1]
            console.log(cardToEdit)
            const updateFormFields = cardId => {

                API.getSingleCardEntry(cardToEdit)
                .then(response => {
                    console.log(response)
                    defaultElements.buildAndAppendForm("edit") 

                document.querySelector("#cardID").value = response.id;
                document.querySelector("#merchantName").value = response.merchantName;
                document.querySelector("#creditLimit").value = response.creditLimit;
                document.querySelector("#creditUsed").value = response.creditUsed;
                document.querySelector("#travelPoints").value = response.travelPoints;
                document.querySelector("#interestRate").value = response.interestRate;
                document.querySelector("#pointsSpan").value = response.pointsSpan;
                console.log(response, "forE")
            
            
        const saveChanges = document.querySelector("#saveBtn")
        console.log(saveChanges)
        saveChanges.addEventListener("click", event => {
                console.log(event, "yo")
                let cardID = document.querySelector("#cardID").value
                const mer = document.querySelector("#merchantName").value
                const limit = document.querySelector("#creditLimit").value
                const used = document.querySelector("#creditUsed").value
                const travel = document.querySelector("#travelPoints").value
                const rate = document.querySelector("#interestRate").value
                const points = document.querySelector("#pointsSpan").value

                const updateObject = {
                    merchantName : mer,
                    creditLimit : limit,
                    creditUsed : used,
                    travelPoints : travel,
                    interestRate : rate,
                    pointsSpan : points,
                }

            API.editSingleJournalEntry(cardID, updateObject)
            .then(() => {
                defaultElements.buildAndAppendForm()
                API.getCardEntries()
                .then(response => renderCards(response))
            })    
            })


            })

            }
            updateFormFields(cardToEdit)
            



        }

        })
    }
}

