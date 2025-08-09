import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders msg prop and increments counter', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Vite + Vue' } });
    expect(wrapper.text()).toContain('Vite + Vue');

    const button = wrapper.get('button');
    expect(button.text()).toContain('count is 0');

    await button.trigger('click');
    expect(button.text()).toContain('count is 1');
  });
});
