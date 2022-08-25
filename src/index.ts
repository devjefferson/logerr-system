import Axios from 'axios';
export type ErrorProps = {
  error?: string;
  objError?: any;
};

export type InitSupabaseProps = {
  baseUrl: string;
  apiKey: string;
  authorization: string;
  project: string;
};

export type Props = {
  captureException: (error: string, objError: any) => Promise<void>;
};

export function initSupabase({
  baseUrl,
  apiKey,
  authorization,
  project,
}: InitSupabaseProps): Props {
  async function captureException(error: string, objError: any): Promise<void> {
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
};
