import React from 'react';

type Props = Omit<React.ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox' | 'className'>;

// https://thenounproject.com/search/?q=Lightning%20Bolt&i=1188000
// Lightning by Mooms from the Noun Project
const Icon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="stroke icon" {...props}>
    <path d="M32,0C14.355,0,0,14.355,0,32c0,17.6445,14.355,32,32,32c17.6445,0,32-14.3555,32-32C64,14.355,49.6445,0,32,0z M32,62   C15.458,62,2,48.542,2,32S15.458,2,32,2s30,13.458,30,30S48.542,62,32,62z" />
    <path d="M46.2412,26.3555H36.292l4.1357-15.9072c0.1182-0.4541-0.0957-0.9297-0.5146-1.1426   c-0.415-0.2134-0.9277-0.1069-1.2266,0.2568L16.9858,36.0098c-0.2456,0.2998-0.2964,0.7129-0.1309,1.0625   c0.165,0.3496,0.5171,0.5723,0.9038,0.5723h9.9492l-4.1353,15.9062c-0.1182,0.4551,0.0957,0.9307,0.5142,1.1436   c0.1445,0.0732,0.2993,0.1084,0.4531,0.1084c0.292,0,0.5786-0.1279,0.7734-0.3652l21.7012-26.4478   c0.2451-0.2988,0.2959-0.7124,0.1309-1.062C46.9795,26.5781,46.6279,26.3555,46.2412,26.3555z M26.6528,49.6523l3.3159-12.7559   c0.0781-0.2998,0.0127-0.6191-0.1768-0.8633c-0.1895-0.2451-0.4814-0.3887-0.791-0.3887H19.873l17.4746-21.2969L34.0312,27.104   c-0.0781,0.2993-0.0127,0.6182,0.1768,0.8633c0.1895,0.2446,0.4814,0.3882,0.791,0.3882h9.1279L26.6528,49.6523z" />
  </svg>
);

export default Icon;
