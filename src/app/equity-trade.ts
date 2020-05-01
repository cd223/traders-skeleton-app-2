import { Trader } from './trader'

export class EquityTrade {
    tradeId: number
    symbol: string
    quantity: number
    price: number
    currency: string
    selectedTrader: Trader
}
