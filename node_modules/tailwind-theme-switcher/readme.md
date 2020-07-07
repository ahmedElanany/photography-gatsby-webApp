# Tailwind theme switcher

A plugin to enable theme switching in tailwind

## Installation

```
yarn add tailwind-theme-switcher
```

or 

```
npm install tailwind-theme-switcher
```

And in your `tailwind.config.js` file

```
module.exports = {
    //...
    plugins: [
        require('tailwind-theme-switcher')
    ]
    //...
}
```

## Usage

Add the color values as you normally do to your "theme" property

```
module.exports = {
    theme: {
        //....
        colors: {
            bg: "#fff"
        }
        //...
    }
}
```

To add a dark mode,

```
module.exports = {
    theme: {
        //....
        themes: {
            dark: {
                bg: "#000"
            }
        },
        colors: {
            bg: "#fff"
        }
        //...
    }
}
```

No if you add the class theme-dark to a root parent element (html, body or a wrapper element), all its child elements will have the dark mode colors applied.

You can add any number of themes this way, and the related classes will be created in the form `theme-${themeName}`