import React from "react";

import classes from "./card.module.scss"

import airlineLogo from "../../assets/2560px-British_Airways_Logo.svg.png"

const Card = (props) => {
    return(
        <div className={classes.Card}>
            <div className={classes.AirlineLogoWrapper}>
                <img src={airlineLogo} alt=""/>
                <button>купить за {props.price}</button>
            </div>
            {/*<div className={classes.TimeWrapper}>*/}
            {/*    <div className={classes.DepartureData}>*/}
            {/*        <h1>{props.departureTime}</h1>*/}
            {/*        <p>{props.origin}, {props.originName}</p>*/}
            {/*        <p>{props.departureDate}</p>*/}
            {/*    </div>*/}
            {/*    <hr/>*/}
            {/*    <div className={classes.ArrivalDate}>*/}
            {/*        <h1>{props.arrivalTime}</h1>*/}
            {/*        <p>{props.destination}, {props.destinationName}</p>*/}
            {/*        <p>{props.arrivalDate}</p>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </div>
    )
}

export default Card;