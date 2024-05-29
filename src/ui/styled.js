import styled from "styled-components";
import ReactLoading from "react-loading";
import Lottie from "react-lottie";

export const hexToRgb = (hex) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
  return `255,255,255`;
};

export const Touch = styled.div.attrs({})`
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 3px ${(props) => props.theme.palette.colors.shadow};
  }
`;

export const Load = styled(ReactLoading).attrs((p) => ({
  type: "spin",
  color: p?.colored ? "#AF00E3" : p?.outline ? "#000" : "#FFFFFF",
  height: 20,
  width: 20,
}))`
  margin: 0 auto;
`;

export const Animation = styled(Lottie).attrs((props) => ({
  options: {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: props.animationData,
  },
  width: props.width ? props.width : 320,
}))`
  max-width: 100%;
`;

export const EmptyMessage = styled.div.attrs({})`
  padding: 32px;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.palette.colors.black};
`;

export const LoadCenter = styled.div.attrs({})`
  width: 20px;
  margin: 32px auto;
  display: flex;
  justify-content: center;
`;

export const DecoratedScroll = styled.div.attrs({})`
  overflow: auto;

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.palette.secondary.main};
    outline: 0 solid ${(props) => props.theme.palette.secondary.main};
  }

  ::-webkit-scrollbar {
    width: 1px;
    height: 0.2rem;
  }

  ::-webkit-scrollbar-track {
  }
`;

export const BodyContentImage = styled.img.attrs({
  src: "/images/logo.png",
})`
  padding: 8px 42px;
`;

export const FormDecoration = styled.img.attrs({
  src: "/images/saly.png",
  width: 720,
})`
  position: absolute;
  right: -580px;
  bottom: 0px;
  ${(props) =>
    props.bottomed
      ? `
            bottom: -230px;
        `
      : ``}
`;

export const BodyContent = styled.div.attrs({})`
  position: relative;
  width: 479px;
  padding: 40px 20px;
  border-radius: 20px;
  background: ${(p) => p.theme.palette.colors.white};

  box-shadow: 0px 3px 6px ${(p) => p.theme.palette.colors.shadow};
`;
