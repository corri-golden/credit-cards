import renderCards from "./cardDOM.js"
import API from "./data.js" 
import htmlElements from "./createForm.js"
import events from "./events.js"


htmlElements.buildAndAppendForm()
htmlElements.buildAndAppendSearch()




API.getCardEntries()
    .then(cards => renderCards(cards))

    events.editListener()
    events.deleteListener()
    events.searchListener()
    


