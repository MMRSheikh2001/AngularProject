import { DisputeResolution } from './enums.model';
import { GigOrder } from './gig.model';
import { UserModel } from './user.model';

export interface Dispute {
  id?: string | number;
  gigOrderId: string | number;
  raisedById: string | number;
  resolvedByAdminId?: string | number;
  gigOrder?: GigOrder;
  raisedBy?: UserModel;
  resolvedByAdmin?: UserModel;
  reason: string;
  adminNote?: string;
  resolution?: DisputeResolution;
  createdAt?: string;
  resolvedAt?: string;
}
