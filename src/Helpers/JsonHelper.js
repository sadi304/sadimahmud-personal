
export const getStringByLineFromJSON = object => {
  const lines = JSON.stringify(object, null, 2).split("\n");
  return lines.reduce((prevLines, currentLine) => `${prevLines}<code>${currentLine}</code>`, '');
}