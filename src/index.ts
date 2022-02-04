import OysterCard from './card'
import Journey from './journey'

const card = new OysterCard() // Initialize Oyster Card
const journey = new Journey() // Initialize Journey

;(async () => {
   await card.deposit(23) // Adding 23 to Card Balance

   await card.getCardBalance() // Viewing The Card Balance

   await card.getCardDepositHistory() // Viewing The History of deposits
   await card.getCardPaymentHistory() // Viewing The History of payments

   await journey.setEntryPoint('Holborn', [1]) // Setting The Entry Point For the Journey

   await journey.setExitPoint('Aldgate', [1]) // Setting The Exit Point For the Journey

   await journey.getJourneyHistory() // Get All Journies History
})()
