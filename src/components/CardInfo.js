import React from 'react';
import { useSpring, animated } from 'react-spring';

// const style = useSpring({opacity: 1, from: {opacity: 0}});

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title text-white">{props.title}</p>
            <p className="g-card-sub-title text-white">{props.subTitle}</p>
            <a className="mr-2 text-success font-weight-bolder" href={props.link} target="_blank" rel="noopener noreferrer">Site Link</a>
            <a className="text-success font-weight-bolder" href={props.repo} tagret="_blank" rel="noopener noreferrer">Repository</a>
        </animated.div>
    );
}

export default CardInfo;