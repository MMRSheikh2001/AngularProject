import { GigOrder } from './gig.model';
import { TransactionType } from './enums.model';
import { UserModel } from './user.model';

export interface Wallet {
  id?: string | number;
  userId: string | number;
  user?: UserModel;
  balance: number;
  pendingBalance: number;
  frozenBalance: number;
  createdAt?: string;
}

export interface Transaction {
  id?: string | number;
  walletId: string | number;
  gigOrderId?: string | number;
  wallet?: Wallet;
  gigOrder?: GigOrder;
  amount: number;
  transactionType: TransactionType;
  referenceId?: string | number;
  referenceType?: string;
  sslTransactionId?: string;
  status: string;
  createdAt?: string;
}
