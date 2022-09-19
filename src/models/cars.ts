export interface CarsInterface {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface StateInterface {
  carList: CarsInterface[];
  byBodyType: string;
}

export interface ActionInterface {
  type: string;
  payload: any;
}
