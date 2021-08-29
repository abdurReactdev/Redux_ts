/** @format */
import { useDispatch } from "react-redux";
import { ActionType } from "./state/action-types";
import { useEffect } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import axios from "axios";
import { stat } from "fs";
const AppState = (props: { term: string }) => {
  const state = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = async () => {
      try {
        const { data } = await axios.get(
          "https://registry.npmjs.org/-/v1/search",
          { params: { text: props.term } }
        );
        console.log(data);
        const names = data.objects.map((result: any) => {
          return result.package.name;
        });
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
          payload: names,
        });
      } catch (err) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
        console.log();
      }
    };
    apiCall();
  }, [props.term]);
  return (
    <div>
      {state.repositories.error && <h3>{state.repositories.error}</h3>}
      {!state.repositories.error && !state.repositories.loading && (
        <ul>
          {state.repositories.data.map((pname) => (
            <li key={pname}>{pname}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppState;
