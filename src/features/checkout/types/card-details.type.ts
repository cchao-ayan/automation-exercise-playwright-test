// ======================================================================//
// ===========       Card Details Types and Interfaces       ============//
// ======================================================================//

export const cardDetailFields = [
    'nameOnCard',
    'cardNumber',
    'cvc',
    'expiryMonth',
    'expiryYear'
] as const

export type CardDetailFields = typeof cardDetailFields[number];

//export type CardDetails = Record<CardDetailFields, string | number>;

 export interface CardDetails {
    nameOnCard: string;
    cardNumber: number;
    cvc: number;
    expiryMonth: number;
    expiryYear: number;
 }
 