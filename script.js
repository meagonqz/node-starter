import "babel-polyfill";
import fetch from 'node-fetch';

const test = fetch('https://jsonplaceholder.typicode.com/posts/1').then( response => response.json() ).then( json => console.log(json));

