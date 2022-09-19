import { ActionInterface, StateInterface } from "../models/cars";

export const carsReducer = (
  state: StateInterface | any,
  action: ActionInterface | any
) => {
  const { type, payload } = action;

  switch (type) {
    case "SORT_BY_BodyType":
      return {
        ...state,
        bodyType: payload,
      };
    default:
      state;
  }
};
