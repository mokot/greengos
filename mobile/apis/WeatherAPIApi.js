import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const getWeatherDailyPOSTStatusAndText = (Constants, { garden_id }) =>
  fetch(`https://dev4569.npkn.net/weather`, {
    body: JSON.stringify({ mode: 'list', garden_id: garden_id }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'napkin-account-api-key': '1b65e6272604477eb2344ae40d9cd324',
    },
    method: 'POST',
  }).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const getWeatherDailyPOST = (Constants, { garden_id }) =>
  getWeatherDailyPOSTStatusAndText(Constants, { garden_id }).then(
    ({ status, statusText, text }) => {
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(
          [
            'Failed to parse response text as JSON.',
            `Error: ${e.message}`,
            `Text: ${JSON.stringify(text)}`,
          ].join('\n\n')
        );
      }
    }
  );

export const useGetWeatherDailyPOST = ({ garden_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://dev4569.npkn.net/weather`, {
    body: JSON.stringify({ mode: 'list', garden_id: garden_id }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'napkin-account-api-key': '1b65e6272604477eb2344ae40d9cd324',
    },
    method: 'POST',
  });
};

export const FetchGetWeatherDailyPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  garden_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://dev4569.npkn.net/weather`, {
    body: JSON.stringify({ mode: 'list', garden_id: garden_id }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'napkin-account-api-key': '1b65e6272604477eb2344ae40d9cd324',
    },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetWeatherDaily: refetch });
};
