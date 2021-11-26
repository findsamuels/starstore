import React from 'react'
import classes from './Banner.module.scss';

const Banner = props => {
    return (
        <div style={{
            
            background: `url(${props.backgroundImage && props.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
            
        }} className={classes.Banner}>
<div className={classes.overLay}>
<div className={classes.bannerSubtitle}>


{props.headerText && <h1>{props.headerText}</h1>}
{props.paragraphText && <p>{props.paragraphText}</p> }
           
</div>
</div>

           
        </div>
    )
}

export default Banner
