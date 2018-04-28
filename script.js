import "babel-polyfill";
import fetch from "node-fetch";

async function getData() {
  const test = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const testJson = await test.json();
  console.log(testJson);
  return testJson;
}
getData();