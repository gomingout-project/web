import styled from 'styled-components';
import img from 'next/image';

import { Layout, COLOR } from '@/styles/index';
import { Span, Icon } from '@/components/atoms';
import { useCalcRegisterDate } from '@/hooks/index';
import MoreComponent from '../community/MoreComponent';

const ItemSection = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `12px solid ${theme.GRAY03}`};
`;

const HeaderSection = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  margin-bottom: 14px;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.color || COLOR.GRAY01};
`;

const TitleSection = styled.section`
  ${Layout.flexColCenterStart};
  width: 100%;
  margin-left: 8px;
`;

const ContentSection = styled.div`
  ${Layout.flexColCenterStart};
  width: 100%;
`;

const ContentSpan = styled(Span)`
  margin-bottom: 12px;

  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;

const FooterSection = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
`;

const ButtonSection = styled.section`
  ${Layout.flexRowStartCenter};
`;

const ButtonArea = styled.div`
  ${Layout.flexRowStartCenter};
  cursor: pointer;
  margin-right: 10px;
`;

export default function PostItem({ post }: { post: any }): JSX.Element {
  const [registerDate] = useCalcRegisterDate(post.createdAt ?? '');

  return (
    <>
      <ItemSection>
        <HeaderSection>
          <div>
            <Circle color={post.color} />
          </div>
          <TitleSection>
            <Span>{post.title}</Span>
            <Span style={{ fontSize: '10px' }}>{registerDate}</Span>
          </TitleSection>
          <MoreComponent />
        </HeaderSection>
        <ContentSection>
          <ContentSpan>{post.content}</ContentSpan>
          {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={'thumnail'}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '12px',
              }}
            />
          )}
        </ContentSection>
        <FooterSection>
          <ButtonSection>
            <ButtonArea>
              <Icon.Heart height={'12px'} />
              <Span style={{ fontSize: '10px', marginLeft: '4px', marginBottom: '-4px' }}>
                {` 공감해요 ${post.likeCount}`}
              </Span>
            </ButtonArea>
            <ButtonArea>
              <Icon.Comment height={'14px'} />
              <Span style={{ fontSize: '10px', marginLeft: '4px', marginBottom: '-4px' }}>
                {`${post.commentCount}`}
              </Span>
            </ButtonArea>
          </ButtonSection>
          <Span style={{ fontSize: '10px' }}>{post.createdAt}</Span>
        </FooterSection>
      </ItemSection>
    </>
  );
}