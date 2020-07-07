module.exports = {
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            print: { raw: "print" }
        },
        fontFamily: {
            sans: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ],
            serif: [
                "Georgia",
                "Cambria",
                '"Times New Roman"',
                "Times",
                "serif"
            ],
            mono: [
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace"
            ]
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem"
        },
        themes: {
            dark: {
                bg: "#111",
                text: "#eee",
                border: "#718096",
                primary: "#1A202C",
                bgalt: "#2D3748"
            }
        },
        colors: {
            bg: "#fff",
            text: "#333",
            border: "#718096",
            primary: "#7F9CF5",
            bgalt: "#F7FAFC"
        },
        extend: {}
    },
    variants: {},
    plugins: [
        require('tailwind-theme-switcher')
    ]
};
