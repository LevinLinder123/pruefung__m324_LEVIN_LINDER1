// index.test.js

import { expect } from 'chai';
import calculate from './index.js'; // Beachte die Dateiendung .js

describe('calculate', function() {
  it('should return the correct addition and subtraction results', function() {
    const result = calculate(5, 3);

    expect(result).to.have.property('addition').that.equals(8);
    expect(result).to.have.property('subtraction').that.equals(2);
  });

  it('should handle negative numbers', function() {
    const result = calculate(-5, -3);

    expect(result).to.have.property('addition').that.equals(-8);
    expect(result).to.have.property('subtraction').that.equals(-2);
  });

  it('should handle zero', function() {
    const result = calculate(0, 0);

    expect(result).to.have.property('addition').that.equals(0);
    expect(result).to.have.property('subtraction').that.equals(0);
  });
});
