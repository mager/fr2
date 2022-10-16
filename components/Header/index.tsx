import * as React from "react";
import Image from "next/image";

import { Routes } from "../../constants";
import Container from "../Container";
import Logo from "../Logo";

// const div = styled(div, ({$theme}) => ({
//   width: '100%',
//   background: $theme.colors.background,
//   margin: 'auto',
//   textAlign: 'center',
//   padding: `0 0 ${$theme.sizing.scale800}`,
// }));

//   fontFamily: 'Titillium Web',
//   fontSize: '16px',
//   margin: 0,
//   padding: 0,
// }));

const Header = () => {
  // const { resolvedTheme } = useTheme();

  return (
    <header>
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
