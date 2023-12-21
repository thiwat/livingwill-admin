import { ActionMode } from "@/enums/detail";
import { Action } from "@/types/detail";

export type CustomActionsProps = {
  mode: ActionMode;
  actions?: Action[];
  onClick: (key: string) => void;
}