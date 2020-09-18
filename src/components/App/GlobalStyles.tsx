import React from "react"
import { createGlobalStyle } from "styled-components"
import { cssVar } from "utils/index"
import { SPACING } from "constants/index"

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html {
        --spacing: ${SPACING}px;
    }

    body {
        background: ${cssVar("colorBackground")};
        color: ${cssVar("colorText")};
        margin: 0;
        padding: 0;
    }

    a {
        color: ${cssVar("colorSecondary")};
    }
`

export default GlobalStyles