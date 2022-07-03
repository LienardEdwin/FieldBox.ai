import {WIND_DIRECTION_NAMES} from "./constants";

export function windDirection (direction:number){

    direction += 22.5;

    if (direction < 0)
        direction = 360 - Math.abs(direction) % 360;
    else
    direction = direction % 360;

    let w = Math.floor(direction / 45);

    return `${WIND_DIRECTION_NAMES[w]}`;
}