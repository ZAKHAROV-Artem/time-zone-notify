import {
  useDispatch as useNotTypedDispatch,
  useSelector as useNotTypedSelector,
} from "react-redux";

import { RootState, AppDispatch } from "../types";

export const useDispatch = useNotTypedDispatch.withTypes<AppDispatch>();
export const useSelector = useNotTypedSelector.withTypes<RootState>();
