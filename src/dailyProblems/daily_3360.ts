export function canAliceWin(n: number): boolean {
  let lastRemove: string = "Alice";
  if (n < 10) {
    return false;
  }

  n = n - 10;
  let stones = 9;

  while (true) {
    if (n >= stones && lastRemove === "Alice") {
      n -= stones;
      lastRemove = "Bob";
      stones--;
    } else if (n >= stones && lastRemove === "Bob") {
      n -= stones;
      lastRemove = "Alice";
      stones--;
    } else {
      return lastRemove === "Alice";
    }
  }
}
