
export const getStringByLineFromJSON = object => {
  const lines = JSON.stringify(object, null, 2).split("\n");
  return lines.reduce((prevLines, currentLine) => {
    if(!currentLine.includes(':')) return `${prevLines}<code>${currentLine}</code>`;
    let splitParts = currentLine.split(":");
    const newLine = `<span class="property-name">${splitParts[0]}</span><span class="colon">:</span>${splitParts.slice(1)}`;
    return `${prevLines}<code>${newLine}</code>`;
  }, '');
}