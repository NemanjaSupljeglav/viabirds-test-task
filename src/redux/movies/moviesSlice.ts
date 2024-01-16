import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Dispatch } from "react";

interface State {
  printData: any;
  personDetails: null;
  oneIpz: null;
  data: { items: any[] }; // Update the type to allow any[] or the specific item type
  loading: "idle" | "pending" | "succeeded" | "failed";
  advisorsList: any[];
}

const initialState = {
  advisorsList: [],
  data: { items: [] },
  loading: "idle",
  oneIpz: null,
  personDetails: null,
  printData: { data: null, loading: false, name: "" }
} as State;

export const ipzReducer = createSlice({
  initialState,
  name: "ipz",
  reducers: {
    clearIpz: (state: State): State => {
      return {
        ...state,
        data: {
          items: []
        },
        loading: "succeeded",
        oneIpz: null,
        personDetails: null
      };
    },
    clearIpzLight: (state: State): State => {
      return {
        ...state,
        loading: "succeeded",
        oneIpz: null,
        personDetails: null
      };
    },
    deleteIpz: (state: State, action: PayloadAction<any>): State => {
      const filteredItems = state.data.items.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        data: {
          ...state.data,
          items: filteredItems
        },
        loading: "succeeded"
      };
    },
    setClearPrintData: (state: State): State => {
      return {
        ...state,
        loading: "succeeded",
        printData: { data: null, loading: false, name: "" }
      };
    },
    setIpz: (state: State, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = "succeeded";
    },
    setOneIpz: (state: State, action: PayloadAction<any>) => {
      state.oneIpz = action.payload;
      state.loading = "succeeded";
    },

    setPersonIpzDetails: (state: State, action: PayloadAction<any>) => {
      state.personDetails = action.payload;
      state.loading = "succeeded";
    },
    setPrintData: (state: State, action: PayloadAction<any>) => {
      state.printData = action.payload;
      state.loading = "succeeded";
    },
    setPrintDataGetOne: (state: State) => {
      state.printData = {
        data: state.oneIpz,
        name: "individualEmploymentPlan"
      };
      state.loading = "succeeded";
    },

    setUpdateIpz: (state: State, action: PayloadAction<any>): State => {
      return {
        ...state,
        data: {
          ...state.data,
          items: state?.data?.items?.map(item => {
            if (item?.id === action.payload?.id) {
              return { ...action.payload };
            }
            return item;
          })
        },
        loading: "succeeded"
      };
    }
  }
});

export const getIpz = (body: any) => async (dispatch: Dispatch<any>) => {
  //const response = await postFunc("ipz/paginate", body);
  const response = { status: 200 };
  if (response?.status === 200) {
    //dispatch(setIpz(response?.data?.data));
    //return toastFunc(response?.data?.message, "success");
  } else {
    //return toastFunc(response?.data?.message, "error");
  }
};

// Action creators are generated for each case reducer function
export const {
  setPersonIpzDetails,
  setUpdateIpz,
  clearIpz,
  setIpz,
  setOneIpz,
  deleteIpz,
  setClearPrintData,
  setPrintDataGetOne,
  setPrintData,
  clearIpzLight
} = ipzReducer.actions;
export const ipz = (state: any) => state.ipz;
export default ipzReducer.reducer;
