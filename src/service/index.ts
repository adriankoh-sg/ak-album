/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from 'axios';
import md5 from 'md5';

const apiKey = process.env.API_KEY ?? '';
const secretKey = process.env.S_KEY ?? '';
const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

type tokenResponse = { token: string };

export const getToken = async () => {
  const url = `${baseUrl}?method=auth.gettoken&api_key=${apiKey}&format=json`;

  const response = await axios.get<tokenResponse>(url, {
    headers: {
      'Accept-Encoding': 'application/json',
    },
  });

  console.log(response?.data.token);
  return response?.data.token;
};

export const generateSig = (token: string) => {
  return md5(`api_key${apiKey}methodauth.getSessiontoken${token}${secretKey}`) as string;
};

export const auth = async () => {
  const token = await getToken();
  if (token) {
    const signature = md5(`api_key${apiKey}methodauth.getSessiontoken${token}${secretKey}`) as string;
    const params = `?method=auth.getSession&token=${token}&api_key=${apiKey}&api_sig=${signature}`;
    const url = `${baseUrl}${params}`;
    console.log(token, url);

    // const response = await axios.get(url, {
    //   headers: {
    //     'Accept-Encoding': 'application/json',
    //   },
    // });

    // console.log(response);
  }
};

export const getTopArtisits = async () => {
  const params = `?method=chart.gettopartists&api_key=${apiKey}&format=json`;
  const url = `${baseUrl}${params}`;

  try {
    const response = await axios.get(url);

    return response?.data;
  } catch (err) {
    return err;
  }
};
