import saveObject from "./postEntry.js"



const form = document.querySelector("#formContainer")
console.log(form)

const htmlElements = {
    buildAndAppendForm(entry) {
        let searchForm =
        `
    <form>
        <h1>Credit Cards</h1>
        <input type="hidden" id="cardID" value="" />
        <fieldset>
        <label for="merchantName">Merchant Name</label>
            <input id="merchantName" name="merchantName" type="text">
        </fieldset>
        <fieldset>
        <label for="creditLimit">Credit Limit</label>
            <input id="creditLimit" name="creditLimit" type="text">
        </fieldset>
        <fieldset>
        <label for="creditUsed">Credit Used</label>
            <input id="creditUsed" name="creditUsed" type="text">
        </fieldset>
        <fieldset>
        <label for="travelPoints">Travel Points</label>
            <input id="travelPoints" name="travelPoints" type="text">
        </fieldset>
        <fieldset>
        <label for="interestRate">Interest Rate</label>
            <input id="interestRate" name="interestRate" type="text">
        </fieldset>
        <fieldset>
        <label for="pointsSpan">Points Span</label>
            <input id="pointsSpan" name="pointsSpan" type="text">
        </fieldset>
    </form>    
        `
        if (entry === "edit") {
            form.innerHTML = ""
            form.innerHTML = searchForm += `<button id="saveBtn">Save Changes</button>`
        } else {
            form.innerHTML = ""
            form.innerHTML = searchForm += `<button id="recordBtn">Record Credit Card</button>`
            const saveBtnEl = document.querySelector("#recordBtn")
            saveBtnEl.addEventListener("click",saveObject.postEntry)
        }

    }

   


}


export default htmlElements