import {
  useDispatch as useNotTypedDispatch,
  useSelector as useNotTypedSelector,
} from "react-redux";

import { AppDispatch, RootState } from "../types";

export const useDispatch = useNotTypedDispatch.withTypes<AppDispatch>();
export const useSelector = useNotTypedSelector.withTypes<RootState>();
