import { logger } from '../src/index';

describe('app', () => {
  it('should log successfully and return log message', () => {
    const response = logger('TypeScript');
    expect(response).toBe('Hello, TypeScript.');
  });
});
