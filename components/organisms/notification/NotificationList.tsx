import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useNotification } from '@/api/notification/hook';
import { INotification } from '@/api/notification/interface';
import { Layout } from '@/styles/theme';
import { NotificationItem, NotificationLoading } from '@/components/organisms';

const NotificationListContainer = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NoDataContainer = styled.li`
  ${Layout.flexColCenter};
  min-height: calc(100vh - 150px);
`;

const NoDataDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.GRAY04};
  font-weight: 700;
`;

const NotificationList = () => {
  //const { notification, isLoading } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<INotification[]>([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setNotification(FAKE_DATAS);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <NotificationLoading />;
  return (
    <NotificationListContainer>
      {notification.length ? (
        notification.map((data) => <NotificationItem notification={data} key={data.pk} />)
      ) : (
        <NoDataContainer>
          <NoDataDescription>๐ณ</NoDataDescription>
          <NoDataDescription>์๋ฆผ์ด ์์ต๋๋ค</NoDataDescription>
        </NoDataContainer>
      )}
    </NotificationListContainer>
  );
};

const FAKE_DATAS: INotification[] = [
  {
    pk: 0,
    title: '๋ณ๋ก ๊ทธ๋ ๊ฒ ์์ถฅ๋ค',
    content:
      'ํ์์ ๊ด์ฐฎ์๋ฐ ์ธ์์ ๋ง์ ์๊ฐ๋ค์ด ๋ํํ ์ ์  ๋๊ฐ ๊ฒ ๊ฐ์ ๊ณ ํต์ผ๋ก ๋ค๊ฐ์ค๋๋ฐ ์ด๋ป๊ฒ ์ด๋ฌ๊ณ  ์ด์ง. ์ ๋๋ก ์ด ์ ์์๊น ๊ณ ์ณ์ง๊ธด ํ ๊น ๋๋ฌด ๋๋ ต๋ค',
    count: 5,
    createdAt: '2022-01-20 20:32',
    type: 'LIKE',
  },
  {
    pk: 1,
    title: 'ํ๋ด',
    content:
      'ํ์์ ๊ด์ฐฎ์๋ฐ ์ธ์์ ๋ง์ ์๊ฐ๋ค์ด ๋ํํ ์ ์  ๋๊ฐ ๊ฒ ๊ฐ์ ๊ณ ํต์ผ๋ก ๋ค๊ฐ์ค๋๋ฐ ์ด๋ป๊ฒ ์ด๋ฌ๊ณ  ์ด์ง. ์ ๋๋ก ์ด ์ ์์๊น ๊ณ ์ณ์ง๊ธด ํ ๊น ๋๋ฌด ๋๋ ต๋ค',
    count: 2,
    createdAt: '2022-01-20 19:32',
    type: 'COMMENT',
  },
  {
    pk: 2,
    title: '๋ณ๋ก ๊ทธ๋ ๊ฒ ์์ถฅ๋ค',
    content:
      'ํ์์ ๊ด์ฐฎ์๋ฐ ์ธ์์ ๋ง์ ์๊ฐ๋ค์ด ๋ํํ ์ ์  ๋๊ฐ ๊ฒ ๊ฐ์ ๊ณ ํต์ผ๋ก ๋ค๊ฐ์ค๋๋ฐ ์ด๋ป๊ฒ ์ด๋ฌ๊ณ  ์ด์ง. ์ ๋๋ก ์ด ์ ์์๊น ๊ณ ์ณ์ง๊ธด ํ ๊น ๋๋ฌด ๋๋ ต๋ค ํ์์ ๊ด์ฐฎ์๋ฐ ์ธ์์ ๋ง์ ์๊ฐ๋ค์ด ๋ํํ ์ ์  ๋๊ฐ ๊ฒ ๊ฐ์ ๊ณ ํต์ผ๋ก ๋ค๊ฐ์ค๋๋ฐ ์ด๋ป๊ฒ ์ด๋ฌ๊ณ  ์ด์ง. ์ ๋๋ก ์ด ์ ์์๊น ๊ณ ์ณ์ง๊ธด ํ ๊น ๋๋ฌด ๋๋ ต๋ค',
    count: 5,
    createdAt: '2022-01-19 04:32',
    type: 'LIKE',
  },
  {
    pk: 3,
    title: 'ํ๋ด',
    content:
      'ํ์์ ๊ด์ฐฎ์๋ฐ ์ธ์์ ๋ง์ ์๊ฐ๋ค์ด ๋ํํ ์ ์  ๋๊ฐ ๊ฒ ๊ฐ์ ๊ณ ํต์ผ๋ก ๋ค๊ฐ์ค๋๋ฐ ์ด๋ป๊ฒ ์ด๋ฌ๊ณ  ์ด์ง. ์ ๋๋ก ์ด ์ ์์๊น ๊ณ ์ณ์ง๊ธด ํ ๊น ๋๋ฌด ๋๋ ต๋ค',
    count: 2,
    createdAt: '2022-01-19 04:32',
    type: 'COMMENT',
  },
  {
    pk: 4,
    title: '๋ณ๋ก ๊ทธ๋ ๊ฒ ์์ถฅ๋ค',
    content:
      'ํ์์ ๊ด์ฐฎ์๋ฐ ์ธ์์ ๋ง์ ์๊ฐ๋ค์ด ๋ํํ ์ ์  ๋๊ฐ ๊ฒ ๊ฐ์ ๊ณ ํต์ผ๋ก ๋ค๊ฐ์ค๋๋ฐ ์ด๋ป๊ฒ ์ด๋ฌ๊ณ  ์ด์ง. ์ ๋๋ก ์ด ์ ์์๊น ๊ณ ์ณ์ง๊ธด ํ ๊น ๋๋ฌด ๋๋ ต๋ค',
    count: 5,
    createdAt: '2022-01-19 04:32',
    type: 'LIKE',
  },
  {
    pk: 5,
    title: '๋ณ๋ก ๊ทธ๋ ๊ฒ ์์ถฅ๋ค',
    content:
      '์๊น ์๊ตญ์ญ์ชฝ ๋ค๋ ๋๋ฐ ๊ฑฐ๊ธฐ ์จ์ดํ์ด ๋ณ๋ก ์๋? ๊ทธ๋์ ๋ค์ด๊ฐ๋๊น ์ด์ฝ ํธ๋ฉ๋๋ ํ์  ์๋๊ธธ๋ ์ฝ์ธ๊ฒ ์ฌ๋จน์๋ค ํด ์ญ์ ๋ฌ๋ฌํ๊ฒ ์ฐ์ธ์๋ ์ง๋นต์ธ๋ฏ ํ๋ด์ ๋ด์์ ์ ๋๋ค๋ค๋ ํ๋ด๋ผ',
    count: 2,
    createdAt: '2021-12-19 04:32',
    type: 'NESTED_COMMENT',
  },
  {
    pk: 6,
    title: '๋ณ๋ก ๊ทธ๋ ๊ฒ ์์ถฅ๋ค',
    content:
      '์๊น ์๊ตญ์ญ์ชฝ ๋ค๋ ๋๋ฐ ๊ฑฐ๊ธฐ ์จ์ดํ์ด ๋ณ๋ก ์๋? ๊ทธ๋์ ๋ค์ด๊ฐ๋๊น ์ด์ฝ ํธ๋ฉ๋๋ ํ์  ์๋๊ธธ๋ ์ฝ์ธ๊ฒ ์ฌ๋จน์๋ค ํด ์ญ์ ๋ฌ๋ฌํ๊ฒ ์ฐ์ธ์๋ ์ง๋นต์ธ๋ฏ ํ๋ด์ ๋ด์์ ์ ๋๋ค๋ค๋ ํ๋ด๋ผ',
    count: 10,
    createdAt: '2021-12-19 04:32',
    type: 'LIKE',
  },
  {
    pk: 7,
    title:
      '์๊น ์๊ตญ์ญ์ชฝ ๋ค๋ ๋๋ฐ ๊ฑฐ๊ธฐ ์จ์ดํ์ด ๋ณ๋ก ์๋? ๊ทธ๋์ ๋ค์ด๊ฐ๋๊น ์ด์ฝ ํธ๋ฉ๋๋ ํ์  ์๋๊ธธ๋ ์ฝ์ธ๊ฒ ์ฌ๋จน์๋ค ',
    content:
      '์๊น ์๊ตญ์ญ์ชฝ ๋ค๋ ๋๋ฐ ๊ฑฐ๊ธฐ ์จ์ดํ์ด ๋ณ๋ก ์๋? ๊ทธ๋์ ๋ค์ด๊ฐ๋๊น ์ด์ฝ ํธ๋ฉ๋๋ ํ์  ์๋๊ธธ๋ ์ฝ์ธ๊ฒ ์ฌ๋จน์๋ค ํด ์ญ์ ๋ฌ๋ฌํ๊ฒ ์ฐ์ธ์๋ ์ง๋นต์ธ๋ฏ ํ๋ด์ ๋ด์์ ์ ๋๋ค๋ค๋ ํ๋ด๋ผ',
    count: 100,
    createdAt: '2022-01-19 04:32',
    type: 'NESTED_COMMENT',
  },
];
export default NotificationList;
