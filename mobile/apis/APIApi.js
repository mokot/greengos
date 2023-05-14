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

export const fetchCropByIdGETStatusAndText = (Constants, { id }) =>
  fetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/crops?id=eq.${id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const fetchCropByIdGET = (Constants, { id }) =>
  fetchCropByIdGETStatusAndText(Constants, { id }).then(
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

export const useFetchCropByIdGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/crops?id=eq.${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );
};

export const FetchFetchCropByIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/crops?id=eq.${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );

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

  return children({ loading, data, error, refetchFetchCropById: refetch });
};

export const fetchCropsGETStatusAndText = Constants =>
  fetch(`https://itboyrbpneggaqiewgem.supabase.co/rest/v1/crops?order=id.asc`, {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      'Content-Type': 'application/json',
      apikey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
    },
  }).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const fetchCropsGET = Constants =>
  fetchCropsGETStatusAndText(Constants).then(({ status, statusText, text }) => {
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
  });

export const useFetchCropsGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/crops?order=id.asc`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );
};

export const FetchFetchCropsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/crops?order=id.asc`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );

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

  return children({ loading, data, error, refetchFetchCrops: refetch });
};

export const fetchGardenByIdGETStatusAndText = (Constants, { garden_id }) =>
  fetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/gardens?id=eq.${
      garden_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const fetchGardenByIdGET = (Constants, { garden_id }) =>
  fetchGardenByIdGETStatusAndText(Constants, { garden_id }).then(
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

export const useFetchGardenByIdGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['garden', args], () => fetchGardenByIdGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['gardens']),
  });
};

export const FetchFetchGardenByIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  garden_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useFetchGardenByIdGET(
    { garden_id },
    { refetchInterval }
  );

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

  return children({ loading, data, error, refetchFetchGardenById: refetch });
};

export const fetchGardensGETStatusAndText = Constants =>
  fetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/gardens?user_id=eq.1`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const fetchGardensGET = Constants =>
  fetchGardensGETStatusAndText(Constants).then(
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

export const useFetchGardensGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/gardens?user_id=eq.1`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );
};

export const FetchFetchGardensGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/gardens?user_id=eq.1`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );

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

  return children({ loading, data, error, refetchFetchGardens: refetch });
};

export const fetchSubgardenByGardenIdGETStatusAndText = (
  Constants,
  { garden_id }
) =>
  fetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/subgarden_crops?garden_id=eq.${
      garden_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const fetchSubgardenByGardenIdGET = (Constants, { garden_id }) =>
  fetchSubgardenByGardenIdGETStatusAndText(Constants, { garden_id }).then(
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

export const useFetchSubgardenByGardenIdGET = ({ garden_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/subgarden_crops?garden_id=eq.${
      garden_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );
};

export const FetchFetchSubgardenByGardenIdGET = ({
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
  } = useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/subgarden_crops?garden_id=eq.${
      garden_id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );

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

  return children({
    loading,
    data,
    error,
    refetchFetchSubgardenByGardenId: refetch,
  });
};

export const fetchSubgardenByIdGETStatusAndText = (Constants, { id }) =>
  fetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/subgarden_crops?crop_id=eq.${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  ).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const fetchSubgardenByIdGET = (Constants, { id }) =>
  fetchSubgardenByIdGETStatusAndText(Constants, { id }).then(
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

export const useFetchSubgardenByIdGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/subgarden_crops?crop_id=eq.${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );
};

export const FetchFetchSubgardenByIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://itboyrbpneggaqiewgem.supabase.co/rest/v1/subgarden_crops?crop_id=eq.${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
        'Content-Type': 'application/json',
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Ym95cmJwbmVnZ2FxaWV3Z2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5MTc4NjMsImV4cCI6MTk5OTQ5Mzg2M30.AcGc-CnMgplg9UxfZ_N34w1iEAL19z2FRc1iIl1YuhU',
      },
    }
  );

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

  return children({ loading, data, error, refetchFetchSubgardenById: refetch });
};
