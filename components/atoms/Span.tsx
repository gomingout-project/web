import styled from 'styled-components';

const Span = styled.span`
  font-size: 14px;
  line-height: 1.57;
  font-weight: 400;
  color: ${({ theme }) => theme.BLACK};
  ${({ inline }: { inline?: boolean }) => { return inline ? 'display: inline-block' : null; }};
`;

export default Span;