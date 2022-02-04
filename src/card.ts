/* 
    Hello my name is Amr Aboras, I like the experiment of this technical test,
    And I appreciate the work and time you put in the hiring process.

    I added all the details you need to know how to run the project in README.md file.
    
    I hope you enjoy, and have a nice day
    
    Regards,
    Amr

*/
interface paymentsHistoryInterface {
   amount: number
}
interface depositHistoryInterface {
   amount: number
}

export default class OysterCard {
   // Card Details
   public balance: number
   protected max_balance: number
   private paymentsHistory: paymentsHistoryInterface[]
   private depositHistory: depositHistoryInterface[]
   private penalty: number
   private min_fare: number

   constructor() {
      this.balance = 2
      this.max_balance = 30
      this.paymentsHistory = []
      this.depositHistory = []
   }

   // Handling the deposits
   public async deposit(amount: number): Promise<any> {
      try {
         if (amount > this.max_balance)
            throw new Error(
               `You can not charge more than ${this.max_balance} !`,
            )

         this.balance += amount
         this.depositHistory.push({ amount })

         return `Your card has been charged with ${amount}, Your balance is ${this.balance}`
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling the payments
   public async payment(amount: number): Promise<any> {
      try {
         if (this.balance < amount)
            throw new Error(`You do not have enough balance to continue !`)

         this.balance -= amount
         this.paymentsHistory.push({ amount })

         return `You paid ${amount} from your card, Your balance is ${this.balance}`
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling Card Balance Request
   public async getCardBalance(): Promise<any> {
      try {
         return this.balance
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling Card Deposit History Request
   public async getCardDepositHistory(): Promise<
      depositHistoryInterface[] | any
   > {
      try {
         return this.depositHistory
      } catch (e) {
         throw new Error(e)
      }
   }

   // Handling Card Payments History Request
   public async getCardPaymentHistory(): Promise<
      paymentsHistoryInterface[] | any
   > {
      try {
         return this.paymentsHistory
      } catch (e) {
         throw new Error(e)
      }
   }
}
