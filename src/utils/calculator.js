const colors = {
  pink: {
    value: -3,
    tolerance: null,
  },
  silver: {
    value: -2,
    tolerance: 10,
  },
  gold: {
    value: -1,
    tolerance: 5,
  },
  black: {
    value: 0,
    tolerance: null,
  },
  brown: {
    value: 1,
    tolerance: 1,
  },
  red: {
    value: 2,
    tolerance: 2,
  },
  orange: {
    value: 3,
    tolerance: 0.05,
  },
  yellow: {
    value: 4,
    tolerance: 0.02,
  },
  green: {
    value: 5,
    tolerance: 0.5,
  },
  blue: {
    value: 6,
    tolerance: 0.25,
  },
  violet: {
    value: 7,
    tolerance: 0.1,
  },
  gray: {
    value: 8,
    tolerance: 0.01,
  },
  white: {
    value: 9,
    tolerance: null,
  },
};

export function CalculateOhmValue(a, b, c, d) {
  let firstFigure = colors[a].value * 10;
  let secondFigure = colors[b].value;
  let multiplierBand = colors[c].value;
  let result = (firstFigure + secondFigure) * Math.pow(10, multiplierBand);

  return {
    result: result,
    tolerance: colors[d].tolerance,
  };
}


