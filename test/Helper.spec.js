import expect from 'expect';
import { Helper } from '../src/index';

describe('Helper', () => {
  describe('getUuid', () => {
    it(`UUID 需要自增.`, () => {
      expect(Helper.getUuid("UUID")).toBe(`UUID-1`);
      expect(Helper.getUuid("UUID")).toBe(`UUID-2`);
      expect(Helper.getUuid("UUID")).toBe(`UUID-3`);
      expect(Helper.getUuid("U")).toBe(`U-1`);
      expect(Helper.getUuid("U")).toBe(`U-2`);
      expect(Helper.getUuid("U")).toBe(`U-3`);
    });
  });
});
