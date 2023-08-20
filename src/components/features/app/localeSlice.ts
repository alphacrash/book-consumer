import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";

interface LocaleState {
  value: string;
}

const initialState: LocaleState = {
  value: "en",
};

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    updateLocale: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateLocale } = localeSlice.actions;

export const selectLocale = (state: RootState) => state.locale.value;

export default localeSlice.reducer;
