import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoPath from '../images/header-logo.svg';
import headerPicture from '../images/header__pic.png';

function Header() {
  const Header = styled.header`
    display: block;
  `;

  const Logo = styled.img.attrs((props) => ({
    src: props.src,
    alt: 'Логотип сайта YourMeal',
  }))`
    max-width: 150px;
    cursor: pointer;
    margin: 0 auto 21px;
    display: block;
  `;

  const HeaderMain = styled.div`
    padding-top: 14px;
    height: 459px;
    background-color: #ffab08;
    border-radius: 100% 0% 50% 50% / 0% 0% 100% 100%;
  `;
  const HeaderPicture = styled.img.attrs((props) => ({
    src: props.src,
    alt: 'Фотография бургера',
  }))`
    max-width: 326px;
  `;

  const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 19px;
  `;

  const Title = styled.h1`
    font-family: 'Nunito';
    margin: 0;
    margin-top: 46px;
    max-width: 437px;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    color: #fff;
  `;

  const Span = styled.span`
    color: #ff5c00;
  `;

  const Text = styled.p`
    margin: 0;
    color: #fff;
    font-family: 'Nunito';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 52px;
  `;

  return (
    <Header>
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
    </Header>
  );
}

export default Header;
