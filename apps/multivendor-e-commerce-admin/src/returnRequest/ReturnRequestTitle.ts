import { ReturnRequest as TReturnRequest } from "../api/returnRequest/ReturnRequest";

export const RETURNREQUEST_TITLE_FIELD = "id";

export const ReturnRequestTitle = (record: TReturnRequest): string => {
  return record.id?.toString() || String(record.id);
};
