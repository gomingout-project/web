import React from 'react';
import { GetServerSideProps } from 'next';

import { API_URL, GLOOMY_TOKEN } from '@/constants/index';
import { fetcherSSR } from '@/utils/ssrFetcher';

interface IKakaoLoginResponse {
  id: number;
  email: string;
  username: string;
  token: string;
}

export default function signUpPage(): JSX.Element {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: { code },
    req: { headers },
  } = ctx;
  const protocol = headers.referer?.split('://')[0];
  const { host } = headers;
  const data = {
    code,
    redirect_uri: `${protocol}://${host}/kakao/signUp`,
  };

  const {
    code: statusCode,
    result,
    message,
  } = await fetcherSSR<IKakaoLoginResponse>({
    method: 'POST',
    url: `${API_URL}/kakao/signUp`,
    ctx,
  })(data);

  if (statusCode !== 200) {
    return {
      redirect: {
        destination: `/kakao/login?error=${message}`,
        permanent: false,
      },
    };
  }

  ctx.res.setHeader('set-Cookie', `${GLOOMY_TOKEN}=${result.token ?? ''}; path=/;`);

  return {
    redirect: {
      destination: '/community',
      permanent: false,
    },
  };
};
