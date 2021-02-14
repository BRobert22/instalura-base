import React from 'react';
import { Logo } from '../../theme/Logo';
import { Button } from '../Button';
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
          return (<li><a href={link.url}>{link.texto}</a> </li>)
        })}
      </MenuWrapper.Center>
      <MenuWrapper.RightSide>
        <Button>Entrar</Button>
        <Button>Sair</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}