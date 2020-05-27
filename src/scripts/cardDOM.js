import makeCardEntryComponent from "./cardComponent.js"

const cardLog = document.querySelector("#cardLog")
console.log(cardLog)

const renderCards = (cards) => {
    console.log(cards)
      let newCardEntryHTML = ""
      cards.forEach(card => {
          console.log(card)
          newCardEntryHTML += makeCardEntryComponent(card)
          cardLog.innerHTML = newCardEntryHTML
      })

}


export default renderCards
