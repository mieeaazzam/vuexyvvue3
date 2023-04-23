import type { Invoice, PaymentDetails } from '@/@fake-db/types'


export interface PurchasedProduct {
  title: string
  cost: number
  hours: number
  description: string
}

export interface InvoiceData {
  invoice: Invoice
  paymentDetails: PaymentDetails
  purchasedProducts: PurchasedProduct[]
  note: string
  paymentMethod: string
  salesperson: string
  thanksNote: string
}

export interface InvoiceParams {
  q?: string,
  status?: string,
  perPage: number,
  currentPage: number,
  startDate?: string,
  endDate?: string,
}
