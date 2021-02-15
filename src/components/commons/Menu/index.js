import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import Text from '../foundation/Text';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const links = [{ texto: "Home", url: "/" }, { texto: "Perguntas", url: "/faq" }, { texto: "Sobre", url: "/sobre" }]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.Center>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>)
        })}
      </MenuWrapper.Center>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}