export const getRandomItem = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

export const capitalizeWords = (str: string) => str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");