import React from 'react';

type Props = Omit<React.ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox' | 'className'>;

// https://thenounproject.com/search/?q=idea&i=252366
// Idea by Gregor Cresnar from the Noun Project
const Icon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="icon" {...props}>
    <path d="M38.7,90v-2.9c0-1.5,1.2-2.8,2.8-2.8h16.9c1.5,0.1,2.7,1.3,2.7,2.8V90c0,2.3-1.7,4.2-3.9,4.5l-0.7,2.6   c-0.4,1.4-1.7,2.4-3.1,2.4h-7c-1.5,0-2.8-1-3.1-2.4l-0.7-2.6C40.4,94.2,38.7,92.3,38.7,90z M50,15.5c1.5,0,2.7-1.2,2.7-2.7V3.2   c0-1.5-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.2-2.7,2.7v9.6C47.3,14.3,48.5,15.5,50,15.5z M5.5,50.4h9.6c1.4,0,2.7-1.2,2.7-2.7   c0-1.5-1.2-2.7-2.7-2.7H5.5c-1.5,0-2.7,1.2-2.7,2.7C2.8,49.2,4,50.4,5.5,50.4z M82.1,47.6c0,1.5,1.2,2.7,2.7,2.7h9.6   c1.5,0,2.7-1.2,2.7-2.7c0.1-1.5-1.1-2.7-2.7-2.7h-9.6C83.3,44.9,82.1,46.1,82.1,47.6z M27.2,70.4c-1-1-2.7-1-3.8,0l-6.8,6.8   c-1.1,1.1-1.1,2.8,0,3.9c0.5,0.5,1.2,0.8,1.9,0.8c0.7,0,1.4-0.3,1.9-0.8l6.8-6.8C28.3,73.2,28.3,71.5,27.2,70.4z M74.7,25.7   c0.7,0,1.4-0.3,1.9-0.8l6.8-6.8c1.1-1.1,1.1-2.8,0-3.9c-1.1-1.1-2.8-1.1-3.9,0L72.7,21c-1.1,1.1-1.1,2.8,0,3.9   C73.3,25.4,74,25.7,74.7,25.7z M23.4,24.9c0.5,0.5,1.2,0.8,1.9,0.8c0.7,0,1.4-0.3,1.9-0.8c1.1-1.1,1.1-2.8,0-3.9l-6.8-6.8   c-1.1-1.1-2.8-1.1-3.9,0c-1.1,1.1-1.1,2.8,0,3.9L23.4,24.9z M79.5,81.1c0.5,0.5,1.2,0.8,1.9,0.8c0.7,0,1.4-0.3,1.9-0.8   c1.1-1.1,1.1-2.8,0-3.9l-6.7-6.8c-1.1-1.1-2.8-1.1-3.9,0c-1.1,1.1-1.1,2.8,0,3.9L79.5,81.1z M24.5,48.3   c-0.1-14,11.1-25.5,25.1-25.6l0.2,0c14,0,25.5,11.3,25.5,25.3c0,6.5-2.6,12.9-7.1,17.6c-2.6,2.7-4.3,6-4.8,9.7   c-0.5,3.2-3.3,5.5-6.5,5.5H42.9c-3.3,0-6-2.3-6.5-5.5c-0.6-3.6-2.3-7.1-4.8-9.7C27.2,60.8,24.6,54.7,24.5,48.3z M30.1,48.2   c0.1,5,2,9.8,5.6,13.4c3.3,3.4,5.6,8,6.3,12.7c0.1,0.6,0.5,0.8,1,0.8h4.3V58.9l-5.8-5.8c-1-1-1-2.7,0-3.7v0c1-1,2.7-1,3.7,0   l4.7,4.7l4.7-4.7c1-1,2.7-1,3.7,0v0c1,1,1,2.7,0,3.7l-5.8,5.8v16.3h4.3c0.5,0,0.9-0.4,1-0.8c0.7-4.8,2.9-9.2,6.3-12.7   c3.5-3.6,5.5-8.6,5.5-13.7c0-10.9-8.9-19.7-19.9-19.7l-0.2,0C38.8,28.3,30,37.3,30.1,48.2z" />
  </svg>
);

export default Icon;
