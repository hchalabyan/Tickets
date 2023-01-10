import React from "react";

import classes from "./main.module.scss";
import Card from "../card/card";

const Main = (props) => {
    return(
        <div className={classes.Main}>
            {props.data.map((item) => {
                console.log("item, item", item.price)
                return(
                    <Card price={item.price + " " + props.price} data={props.data}
                          // departureTime={item[departure_time]}
                          // origin={item.origin}
                          // originName={item[origin_name]}
                          // departureDate={item[departure_date]}
                          // arrivalTime={item[arrival_time]}
                          // destination={item.destination}
                          // destinationName={item[destination_name]}
                          // arrivalDate={item[arrival_date]}
                    />
                )
            })}

        </div>
    )
}

export default Main;