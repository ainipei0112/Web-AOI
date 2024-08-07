import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
    <Global
        styles={css`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            html {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                height: 100%;
                width: 100%;
            }
            body {
                background-color: #f4f6f8;
                height: 100%;
                width: 100%;
            }
            a {
                text-decoration: none;
            }
            #root {
                height: 100%;
                width: 100%;
            }
        `}
    />
)

export default GlobalStyles
