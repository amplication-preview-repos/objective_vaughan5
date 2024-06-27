import { SortOrder } from "../../util/SortOrder";

export type ActivityLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
