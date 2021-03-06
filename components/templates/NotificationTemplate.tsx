import styled from 'styled-components';

import { Layout } from '@/styles/index';
import { Title } from '@/components/atoms';
import { AsyncBoundary, BottomNav, NotificationList, NotificationLoading } from '@/components/organisms';

const MainContainer = styled.main`
  ${Layout.flexColStartStart};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const HeaderSection = styled.section`
  ${Layout.flexRowBetweenEnd};
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.WHITE};
  height: 56px;
  padding: 0 17px 9px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const ContentContainer = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
`;

export default function NotificationTemplate(): JSX.Element {
  return (
    <MainContainer>
      <HeaderSection>
        <Title>알림</Title>
      </HeaderSection>
      <ContentContainer>
        <AsyncBoundary pendingFallback={<NotificationLoading />} isRefresh={true}>
          <NotificationList />
        </AsyncBoundary>
      </ContentContainer>
      <BottomNav />
    </MainContainer>
  );
}
