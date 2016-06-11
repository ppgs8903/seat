import expect from 'expect';
import { Helper } from '../src/index';

describe('Helper', () => {
  describe('getUniqueId', () => {
    it('获取唯一ID，需要自增.', () => {
      expect(Helper.getUniqueId('UUID')).toBe('UUID-1');
      expect(Helper.getUniqueId('UUID')).toBe('UUID-2');
      expect(Helper.getUniqueId('UUID')).toBe('UUID-3');
      expect(Helper.getUniqueId('U')).toBe('U-1');
      expect(Helper.getUniqueId('U')).toBe('U-2');
      expect(Helper.getUniqueId('U')).toBe('U-3');
    });
  });

  describe('getUuid', () => {
    it('获取UUID.', () => {
      expect(/[0-9|a-z|A-Z]{32}/g.test(Helper.getUuid())).toBeTruthy();
    });
  });
});
