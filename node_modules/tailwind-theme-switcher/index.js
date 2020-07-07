const _ = require("lodash");

module.exports = function({ addUtilities, variants, theme, e }) {

    const themes = theme("themes");

    if(!themes) {
        console.warn("\x1b[33m","Warning: No themes property in your tailwind config file");
        return;
    }
    
    const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
    .default;

    let utilities = {};

    const properties = [
        {
            property: "background-color",
            name: "bg"
        },{
            property: "border-color",
            name: "border"
        },{
            property: "color",
            name: "placeholder",
            pseudo: "::placeholder"
        },{
            property: "color",
            name: "text"
        }
    ]

    Object.keys(themes).forEach(theme => {
        let parent = e(`theme-${theme}`);
        
        properties.forEach(prop => {
            let res = makeColorVariant(prop, parent, theme);
            utilities = {...utilities, ...res};
        })
    });


    addUtilities(utilities, ["responsive", "hover", "focus"])

    function makeColorVariant(property, parent, th) {
        const colors = flattenColorPalette(themes[th]);

        const createPair = (p,m,v,par) => {
            let selector;
            if(p.pseudo){
                selector = `${e(`${p.name}-${m}`)}${p.pseudo}`;
            }else {
                selector = e(`${p.name}-${m}`);
            }

            selector = `.${par} .${selector}`;

            let value = {};
            value[p.property] = v;
            return [selector, value]
        }

        return _.fromPairs(
            _.map(_.omit(colors, "default"), (value, modifier) => {
                return createPair(property, modifier, value, parent);
            })
        );
    }
}