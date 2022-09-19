import { ActionInterface, StateInterface } from "../models/cars";

export const carsReducer = (
  state: StateInterface | any,
  action: ActionInterface | any
) => {
  //export const carsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SORT_BY_modelType":
      return {
        ...state,
        modelType: payload,
      };
    default:
      state;
  }
};
