import config from '../../api.json';
import { useState, useEffect } from "react";


let current = config.dev;

if (process.env.NODE_ENV === 'production') {
    current = config.prod;
}
console.log(current);
export default current;