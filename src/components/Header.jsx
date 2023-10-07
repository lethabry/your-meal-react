import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoPath from '../images/header-logo.svg';
import headerPicture from '../images/header__pic.png';

const HeaderBlock = styled.header`
  margin: 0 auto;
`;

const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'Логотип сайта YourMeal',
}))`
  max-width: 150px;
  cursor: pointer;
  margin: 0 auto 22px;
  display: block;
`;

const HeaderMain = styled.div`
  padding-top: 21px;
  background-color: #ffab08;
`;
const HeaderPicture = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'Фотография бургера',
}))`
  max-width: 326px;
  @media (max-width: 930px) {
    max-width: 227px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 19px;
  padding-bottom: 63px;

  @media (max-width: 930px) {
    gap: 10px;
    padding-bottom: 44px;
  }
  @media (max-width: 474px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 30px;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 46px;
  max-width: 437px;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  color: #fff;

  @media (max-width: 930px) {
    font-size: 36px;
    margin-top: 27px;
    max-width: 325px;
  }
  @media (max-width: 474px) {
    margin-top: 0;
    text-align: center;
    font-size: 30px;
  }
`;

const Span = styled.span`
  color: #ff5c00;
`;

const Text = styled.p`
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 930px) {
    font-size: 12px;
  }
  @media (max-width: 474px) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  @media (max-width: 930px) {
    gap: 26px;
  }
  @media (max-width: 474px) {
    gap: 16px;
  }
`;

function Header() {
  return (
    <HeaderBlock>
      <HeaderMain>
        <Link to="/">
          <Logo src={logoPath} />
        </Link>
        <HeaderContent>
          <HeaderPicture src={headerPicture} />
          <Container>
            <Title>
              Только самые <Span>сочные бургеры!</Span>
            </Title>
            <Text>Бесплатная доставка от 599₽</Text>
          </Container>
        </HeaderContent>
      </HeaderMain>
    </HeaderBlock>
  );
}

export default Header;
