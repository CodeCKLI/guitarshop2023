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

export const getAllGuitars = async () => {
  const response = await fetch(`${HOST}:${PORT}/guitars`);
  const data = await response.json();
  return data;
};
