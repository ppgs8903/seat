import expect from 'expect';
import { Event } from '../src/index';

describe('Event', () => {
  describe('publish_subscribe的测试', () => {
    it('需要能响应事件.', () => {
      Event.publish('/publish', { 'name': 'publish' });

      Event.subscribe('/publish', function (data) {
        expect(data.name).toBe('publish');
      });
    });
  });
});
