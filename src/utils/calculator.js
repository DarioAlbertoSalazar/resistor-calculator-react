export function CalculateOhmValue(a, b, c, d, colors) {
  if(colors){
    let firstFigure = colors[a].value * 10;
    let secondFigure = colors[b].value;
    let multiplierBand = colors[c].value;
    let result = (firstFigure + secondFigure) * Math.pow(10, multiplierBand);
  
    return {
      result: result,
      tolerance: colors[d].tolerance,
    };
  } else {
    return {
      result: 0,
      tolerance: 0,
    }
  }
}


