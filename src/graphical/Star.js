import React, { PureComponent } from 'react';

export default class Star extends PureComponent {

    props: {
		on: boolean,
	};

    render() {
        const { on } = this.props;

        return (
            <svg width="2em" height="2em" viewBox="0 0 100 100">
                {on ?
                    <path d="M53.1,16.9L61.6,34c0.5,1,1.5,1.7,2.6,1.9L83,38.7c2.9,0.4,4,3.9,1.9,6L71.3,57.9c-0.8,0.8-1.2,2-1,3.1l3.2,18.7  c0.5,2.9-2.5,5-5.1,3.7l-16.8-8.9c-1-0.5-2.2-0.5-3.3,0l-16.8,8.9c-2.6,1.3-5.6-0.8-5.1-3.7L29.7,61c0.2-1.1-0.2-2.3-1-3.1  L15.1,44.6c-2.1-2-0.9-5.5,1.9-6l18.8-2.7c1.1-0.2,2.1-0.9,2.6-1.9l8.4-17.1C48.1,14.4,51.9,14.4,53.1,16.9z" /> :
                    <path d="M50,19.6l8,16.1c1.1,2.2,3.2,3.7,5.6,4.1l17.8,2.6L68.5,55c-1.8,1.7-2.6,4.2-2.2,6.6l3,17.7L53.5,71  c-1.1-0.6-2.3-0.9-3.5-0.9s-2.4,0.3-3.5,0.9l-15.9,8.4l3-17.7c0.4-2.4-0.4-4.9-2.2-6.6L18.6,42.5l17.8-2.6c2.4-0.4,4.6-1.9,5.6-4.1  L50,19.6 M50,15c-1.2,0-2.5,0.6-3.1,1.9L38.4,34c-0.5,1-1.5,1.7-2.6,1.9L17,38.7c-2.9,0.4-4,3.9-1.9,6l13.6,13.3  c0.8,0.8,1.2,2,1,3.1l-3.2,18.7c-0.4,2.3,1.4,4.1,3.4,4.1c0.5,0,1.1-0.1,1.6-0.4l16.8-8.9c0.5-0.3,1.1-0.4,1.6-0.4s1.1,0.1,1.6,0.4  l16.8,8.9c0.5,0.3,1.1,0.4,1.6,0.4c2,0,3.8-1.8,3.4-4.1L70.3,61c-0.2-1.1,0.2-2.3,1-3.1l13.6-13.3c2.1-2,0.9-5.5-1.9-6l-18.8-2.7  C63,35.7,62.1,35,61.6,34l-8.4-17.1C52.5,15.6,51.2,15,50,15L50,15z" />
                }
            </svg>
        );
    }
}
