import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        background: '#1D1D1D',
        white: '#F5F8FA',
        highlight: '#FFBA08',
        heading: '#47585B',
        text: '#47585B',
        info: '#999999'
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'background',
                color: 'text'
            }
        }
    }
})