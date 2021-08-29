/** @format */

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { ActionType } from "./state/action-types";
import AppState from "./appstate";
/** @format */

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const [searchTerm, setsearchTerm] = useState("");
  const [flag, setflag] = useState(false);
  const state = useTypedSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm(searchTerm);
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    setflag(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <button>Search</button>
        {state.repositories.loading && <h3>Loading</h3>}
        {flag && <AppState term={term} />}
      </form>
    </div>
  );
};

export default RepositoriesList;
