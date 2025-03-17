export interface LoanApplication {
  cryptoAmount: number;
  cryptoType: string;
  loanAmount: number;
  repaymentSchedule: 'weekly' | 'biweekly' | 'monthly';
  term: number; // in months
}

export interface WalletInfo {
  address: string;
  balance: number;
  connected: boolean;
}

export interface LoanTerms {
  apr: number;
  maxLTV: number;
  minLoan: number;
  maxLoan: number;
  possibleTerms: number[];
}