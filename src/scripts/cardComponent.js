


const makeCardEntryComponent = (cardEntry) => {
    return `
    <fieldset>
    <h1>${cardEntry.merchantName}</h1>
    <h1>${cardEntry.creditLimit}</h1>
    <h1>${cardEntry.creditUsed}</h1>
    <h1>${cardEntry.travelPoints}</h1>
    <h1>${cardEntry.interestRate}</h1>
    <h1>${cardEntry.pointsSpan}</h1>
    <button id="editCard--${cardEntry.id}">
    Edit Card
    </button>
    <button id="deleteCard--${cardEntry.id}">
    Delete Card
    </button>
    </fieldset>
   
    `
}

export default makeCardEntryComponent