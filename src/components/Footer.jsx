import styled from 'styled-components';
import LogoPath from '../images/logo__footer.svg';
import { Text } from '../universalStyles/universalStyles';
import { Link } from 'react-router-dom';
import VkIcon from '../images/vk_icon.svg';
import TelegramIcon from '../images/telegram_icon.svg';

const FooterContainer = styled.footer`
  display: grid;
  background-color: #ffffff;
  padding: 47px 0px 40px 57px;
  grid-template-columns: 1.8fr 1fr 1fr;
  @media (max-width: 930px) {
    padding: 40px 64px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 36px;
  }
  @media (max-width: 474px) {
    padding: 24px 10px;
  }
`;

const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'Логотип',
}))`
  width: 345px;
  max-height: 69px;

  @media (max-width: 930px) {
    grid-column: 1/4;
    width: 196px;
  }
`;
const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 930px) {
    gap: 8px;
  }
  @media (max-width: 474px) {
    grid-column: 1/4;
  }
`;

const FooterSubtitle = styled(Text)`
  font-size: 24px;
  line-height: 100%;
  @media (max-width: 930px) {
    font-size: 18px;
  }
`;

const FooterText = styled(Text)`
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  @media (max-width: 930px) {
    font-size: 12px;
  }
`;

const FooterPhoneNumber = styled.a`
  text-decoration: none;
  color: inherit;
`;

const FooterIconsList = styled.div`
  display: flex;
  gap: 16px;
`;

const FooterVkLink = styled(Link)`
  width: 24px;
  height: 24px;
  background-image: url(${VkIcon});
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    background-image: url(${VkIcon});
  }
  @media (max-width: 930px) {
    width: 36px;
    height: 34px;
  }
`;

const FooterTelegramLink = styled(FooterVkLink)`
  background-image: url(${TelegramIcon});
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo src={LogoPath} />
      <FooterMenu>
        <FooterSubtitle as="h3">Номер для заказа</FooterSubtitle>
        <FooterText>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_2456)">
              <path
                d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_2456">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <FooterPhoneNumber href="tel:+7(930)833-38-11">+7(930)833-38-11</FooterPhoneNumber>
        </FooterText>
      </FooterMenu>
      <FooterMenu>
        <FooterSubtitle as="h3">Мы в соцсетях</FooterSubtitle>
        <FooterIconsList>
          <FooterVkLink to={'https://vk.com'} />
          <FooterTelegramLink to={'https://web.telegram.org'} />
        </FooterIconsList>
      </FooterMenu>
    </FooterContainer>
  );
}

export default Footer;
