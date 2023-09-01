import { CalculateOhmValue } from "./calculator";
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
describe('Ohm Calculator', function() {
    it('should calculate 2.7 MOhms with red, violet, green, gold bands', function() {
        const result = CalculateOhmValue('red', 'violet', 'green', 'gold', colors);
        expect(result.result).toBe(2700000)
        expect(result.tolerance).toBe(5)
    })
    it('should calculate 12k Ohms with brown, red, orange, grey bands', function() {
      const result = CalculateOhmValue('brown', 'red', 'orange', 'gray', colors);
      expect(result.result).toBe(12000)
      expect(result.tolerance).toBe(0.01)
    })
      it('should calculate 4.1M Ohms with yellow, brown, green, gold bands', function() {
        const result = CalculateOhmValue('yellow', 'brown', 'green', 'gold', colors);
        expect(result.result).toBe(4100000)
        expect(result.tolerance).toBe(5)
    })
      it('should calculate 60k Ohms with blue, black, orange, silver bands', function() {
        const result = CalculateOhmValue('blue', 'black', 'orange', 'silver', colors);
        expect(result.result).toBe(60000)
        expect(result.tolerance).toBe(10)
    })
    it('should calculate 37M Ohms with blue, black, orange, silver bands', function() {
      const result = CalculateOhmValue('blue', 'black', 'orange', 'silver', colors);
      expect(result.result).toBe(60000)
      expect(result.tolerance).toBe(10)
    })
    it('should calculate 60k Ohms with black, blue, yellow, silver bands', function() {
      const result = CalculateOhmValue('black', 'blue', 'yellow', 'silver', colors);
      expect(result.result).toBe(60000)
      expect(result.tolerance).toBe(10)
    })
    it('should calculate 60k Ohms with violet, brown, yellow, red bands', function() {
      const result = CalculateOhmValue('violet', 'brown', 'yellow', 'red', colors);
      expect(result.result).toBe(710000)
      expect(result.tolerance).toBe(2)
    })
});