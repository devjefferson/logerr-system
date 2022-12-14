import Axios from 'axios';

export type InitSupabaseProps = {
  baseUrl: string;
  apiKey: string;
  authorization: string;
  project: string;
};

export type InitApiProps = {
  baseUrl: string;
  apiKey?: string;
  authorization: string;
  project: string;
};

export type Props = {
  captureException: (error: string, objError: Error | null) => Promise<void>;
};

export function initSupabase({
  baseUrl,
  apiKey,
  authorization,
  project,
}: InitSupabaseProps): Props {
  async function captureException(
    error: string,
    objError: Error | null,
  ): Promise<void> {
    const location = await (
      await fetch('https://geolocation-db.com/json/')
    ).json();

    await Axios.post(
      baseUrl,
      {
        error,
        objError: {
          cause: objError,
          location,
          path: window.location.href.toString(),
          browser: window.navigator.userAgent,
        },
        project,
      },
      {
        headers: {
          apiKey,
          Authorization: `Bearer ${authorization}`,
          'Content-Type': 'application/json',
        },
      },
    );
  }

  return {
    captureException,
  };
}

export function initApi({
  baseUrl,
  apiKey,
  authorization,
  project,
}: InitApiProps): Props {
  async function captureException(
    error: string,
    objError: Error | null,
  ): Promise<void> {
    const location = await (
      await fetch('https://geolocation-db.com/json/')
    ).json();

    await Axios.post(
      baseUrl,
      {
        error,
        objError: {
          cause: objError,
          location,
          path: window.location.href.toString(),
          browser: window.navigator.userAgent,
        },
        project,
      },
      {
        headers: {
          apiKey,
          Authorization: `Bearer ${authorization}`,
          'Content-Type': 'application/json',
        },
      },
    );
  }

  return {
    captureException,
  };
}

export const LogErr = {
  initSupabase,
  initApi,
};
