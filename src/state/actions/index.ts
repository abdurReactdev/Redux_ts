/** @format */
import { ActionType } from "../action-types/index";

interface search_repositories_Action {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface search_repositories_success_Action {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface search_repositories_error_Action {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | search_repositories_Action
  | search_repositories_success_Action
  | search_repositories_error_Action;
