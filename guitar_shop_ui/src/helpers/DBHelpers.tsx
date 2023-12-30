const env = import.meta.env;

let HOST: string;
let PORT: string;

if (env.VITE_REACT_APP_MDOE == "DEV") {
  HOST = env.VITE_REACT_APP_DEV_HOST;
  PORT = env.VITE_REACT_APP_DEV_PORT;
} else if (env.VITE_REACT_APP_MDOE == "PROD") {
  HOST = env.VITE_REACT_APP_PROD_HOST;
  PORT = env.VITE_REACT_APP_PROD_PORT;
}

export const findAllGuitars = async (
  page: number,
  isSort: boolean,
  sortBy: string,
  sortOrder: string,
  isFilter: boolean,
  brand: string,
  price: string
) => {
  const response = await fetch(
    `${HOST}:${PORT}/api/public/guitars?pageNo=${
      page - 1
    }&pageSize=10&isSort=${isSort}&sortBy=${sortBy}&dir=${sortOrder}&isFilter=${isFilter}&brand=${brand}&price=${price}`
  );

  const data = await response.json();

  return data;
};

export const findGuitarByID = async (guitarID: number) => {
  const response = await fetch(
    `${HOST}:${PORT}/api/public/guitar?guitarID=${guitarID}`
  );
  const data = await response.json();
  return data;
};

export const findGuitarByModel = async (model: string) => {
  const response = await fetch(
    `${HOST}:${PORT}/api/public/guitarbyModel?model=${model}`
  );
  const data = await response.json();
  return data;
};
