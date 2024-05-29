import styled from "styled-components";

export const DashboardHeaderContainer = styled.div.attrs({})`
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  width: 100%;

  background: ${(props) => props.theme.palette.colors.white};

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  box-shadow: 0px 3px 6px ${(p) => p.theme.palette.colors.shadow};
  z-index: 2;
  overflow: visible;

  @media (max-width: 991px) {
    height: auto;
    max-height: initial;
  }
`;

export const ContentHeaderActions = styled.div.attrs({})`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 987px) {
    margin: 0 0 0 auto;
  }
`;
