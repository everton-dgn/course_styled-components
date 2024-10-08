import { ReactNode } from 'react'

type LastBuyItems = {
  currency: string
  name: string
  isPositive: boolean
  currentPercentageVariation: number
  lastDayPercentageChange: number
  changePercentOfTheWeek: number
  totalPercentage: number
  price: number
  icon: ReactNode
}

export type LastBuyProps = {
  dataLastBuy: LastBuyItems[]
}
