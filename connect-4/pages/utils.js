import { Player } from "../model/index";

export function getArrayOfNumber(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) array.push(i);

  return array;
}

export function getArrayOfPlayers(n) {
  const array = [];
  for (let i = 0; i < n; i++) array.push(new Player());

  return array;
}
