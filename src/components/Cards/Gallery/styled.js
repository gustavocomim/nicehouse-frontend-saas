import styled from "styled-components";

export const CardGalleryContent = styled.div.attrs({})`
  height: 100%;
  background: ${(p) => p.theme.palette.colors.white};
  box-shadow: 0px 3px 6px ${(p) => p.theme.palette.colors.shadow};
  flex: 1;
`;
export const CardGalleryImage = styled.div.attrs({})`
  width: 100%;
  height: 320px;
  background: ${(p) => p.theme.palette.colors.borderline} url(${(p) => p.image})
    no-repeat center center / cover;
`;
export const CardGalleryVideo = styled.video.attrs({})`
  width: 100%;
  height: 320px;
  background: ${(p) => p.theme.palette.colors.borderline} url(${(p) => p.image})
    no-repeat center center / cover;

  object-fit: cover;
`;
export const CardGalleryBody = styled.div.attrs({})`
  margin: 16px 16px 0;
  border-top: 1px solid ${(p) => p.theme.palette.colors.borderline};
  padding: 16px 0;
  height: 100%;
`;
export const CardGalleryBodyStatus = styled.div.attrs({})`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;
export const CardGalleryBodyStatusIcon = styled.img.attrs((p) => ({
  width: 16,
  src: `/icons/${p.icon}.svg`,
}))``;
export const CardGalleryBodyStatusText = styled.div.attrs({})`
  font-size: 14px;
  color: ${(props) =>
    props.red
      ? props.theme.palette.error.main
      : props.theme.palette.colors.green};
`;
export const CardGalleryBodyText = styled.div.attrs({})`
  font-size: 14px;
  color: ${(props) => props.theme.palette.colors.text};
  margin: 8px 0;
`;
export const CardGalleryBodyActions = styled.div.attrs({})`
  padding: 16px 0;
  display: flex;
  gap: 16px;
`;

export const CardGalleryBodyStatusSpacer = styled.div.attrs({})`
  height: 21px;
`;
