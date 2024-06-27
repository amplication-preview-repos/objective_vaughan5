import { ActivityLog as TActivityLog } from "../api/activityLog/ActivityLog";

export const ACTIVITYLOG_TITLE_FIELD = "id";

export const ActivityLogTitle = (record: TActivityLog): string => {
  return record.id?.toString() || String(record.id);
};
