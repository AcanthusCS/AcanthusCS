import Typography from "typography";
import sternGroveTheme from 'typography-theme-stern-grove';

sternGroveTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(0),
  }
});

sternGroveTheme.googleFonts = [
  {
    name: 'Oswald',
    styles: [
      '400',
      '700',
    ],
  },
  {
    name: 'Raleway',
    styles: ['400'],
  },
];

sternGroveTheme.headerFontFamily = ['Oswald', 'sans-serif'];

sternGroveTheme.bodyFontFamily = ['Raleway', 'sans-serif'];

sternGroveTheme.headerColor = 'hsl(202, 84%, 23%)';

const typography = new Typography(sternGroveTheme);

export default typography;