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

export const authenticateUser = async (email: string, password: string) => {
  try {
    const response = await fetch(
      `${HOST}:${PORT}/api/public/auth/authenticate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const result = response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const userSignin = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/api/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });

    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const ceateOrder = async (
  customerEmail: string,
  customerFirstName: string,
  customerLastName: string,
  customerPhone: string,

  customerCountry: string,
  customerAddress: string,
  customerCity: string,
  customerPostal: string,

  paymentMethod: string,
  cardNumber: string,
  cardCSV: string,
  appuser_id: Number | undefined,
  status: string,

  guitars: String,

  tax: Number,
  shipping: Number,
  total: Number
) => {
  try {
    const response = await fetch(`${HOST}:${PORT}/api/public/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerEmail: customerEmail,
        customerFirstName: customerFirstName,
        customerLastName: customerLastName,
        customerPhone: customerPhone,

        customerCountry: customerCountry,
        customerAddress: customerAddress,
        customerCity: customerCity,
        customerPostal: customerPostal,

        paymentMethod: paymentMethod,
        cardNumber: cardNumber,
        cardCSV: cardCSV,
        appuser_id: appuser_id,
        status: status,
        guitarList: guitars,

        tax: tax,
        shipping: shipping,
        total: total,
      }),
    });

    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getOrdersByAppuserID = async (appuserID: Number) => {
  console.log(appuserID);

  const response = await fetch(
    `${HOST}:${PORT}/api/public/order/getOrdersByAppuserID?appuserID=${appuserID}`
  );

  const data = await response.json();

  return data;
};
