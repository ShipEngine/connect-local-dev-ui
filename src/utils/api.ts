// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const apiHost = process.env.REACT_APP_API_HOST!;

const API = {
  getAppInfo: apiHost,
  getAppStatus: `${apiHost}/app-status`,
  putConnect: `${apiHost}/connect`,
};

export default API;
