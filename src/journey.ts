interface journeyHistoryInterface {
   entryPoint: [string, number[]]
   exitPoint: [string, number[]]
   //    transportMethod: string
}

import OysterCard from './card'
const card = new OysterCard()

export default class Journey {
   private entryStation: string
   private exitStation: string
   private entryZone: number[]
   private exitZone: number[]
   private journeyHistory: journeyHistoryInterface[]
   private isInJourney: boolean
   private min_fare: number
   private breach: number

   constructor() {
      this.entryStation = ''
      this.exitStation = ''
      this.entryZone = []
      this.journeyHistory = []
      this.isInJourney = false
      this.min_fare = 1
      this.breach = 3
   }

   // Handling Setting The Entry Point
   public async setEntryPoint(station: string, zone: number[]): Promise<any> {
      try {
         this.entryStation = station
         this.entryZone = zone
         this.isInJourney = true

         return `You are starting you journey from station ${this.entryStation}, zone ${this.entryZone}`
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling Setting The Exit Point
   public async setExitPoint(station: string, zone: number[]): Promise<any> {
      try {
         this.exitStation = station
         this.exitZone = zone
         this.isInJourney = false
         await this.createJourneyHistory()
         await card.payment(this.min_fare)
         return `You have reached your destination station ${this.exitStation}, zone ${this.exitStation}`
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling Create New Journy History Item
   public async createJourneyHistory(): Promise<any> {
      try {
         const hitory: journeyHistoryInterface = {
            entryPoint: [this.entryStation, this.entryZone],
            exitPoint: [this.exitStation, this.exitZone],
         }
         this.journeyHistory.push(hitory)
         return `Journy History Created !`
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling View Journey History
   public async getJourneyHistory(): Promise<journeyHistoryInterface[] | any> {
      try {
         if (this.journeyHistory.length < 1) {
            return `You didn't make any journey yet !`
         }
         return this.journeyHistory
      } catch (e) {
         throw new Error(e)
      }
   }
   // Handling Fares
   public async fare(): Promise<any> {
      try {
         return this.isInJourney == true ? 6 : 1
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling Zone Pricing
   public async zone(): Promise<void> {
      if (this.exitZone === [1]) {
         card.payment(this.min_fare + 10)
      }
      if (this.exitZone === [2]) {
         card.payment(this.min_fare + 15)
      }
      if (this.exitZone === [3]) {
         card.payment(this.min_fare + 20)
      }
   }

   // Handling Breaches
   public async setBreach(): Promise<any> {
      try {
         if (this.setEntryPoint) {
            card.payment(this.breach)
            return 'You have been given a Breach'
         }
      } catch (e) {
         throw new Error(e)
      }
   }
}
