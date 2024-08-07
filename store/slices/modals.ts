import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import { Modals } from "~/types/modals";

export interface ModalsState {
  modal: Modals;
}

const initialState: ModalsState = {
  modal: Modals.Empty,
};

export const modalsSlice = createSlice({
  initialState,
  name: "modals",
  reducers: {
    resetModal: (state) => {
      state.modal = initialState.modal;
    },

    setModal: (state, action: PayloadAction<any>) => {
      state.modal = action.payload;
    },
  },
});

export const { resetModal, setModal } = modalsSlice.actions;

export default modalsSlice.reducer;
