import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'coinranking3324d9ef7e07d223f4f7ba6d3feab31a8be4398650b3fc1a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://api.coinranking.com/v2';
const createRequest= (url)=> ({url,headers: cryptoApiHeaders})
export const cryptoApi = createApi({
reducerPath:'cryptoApi',
baseQuery: fetchBaseQuery({baseUrl}),
endpoints:(builder)=>({
    getCryptos:builder.query({
     query:(count)=> createRequest("/coins"),   
    }),
    getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest('coin/${coinId}/history?timeperiod=${timeperiod}'),
      }),
  
      // Note: To access this endpoint you need premium plan
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
    }),
  });
  
  export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;