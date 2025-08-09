import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../../src/stores/counter';

describe('counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('increments and resets', () => {
    const store = useCounterStore();
    expect(store.count).toBe(0);
    store.increment();
    expect(store.count).toBe(1);
    store.reset();
    expect(store.count).toBe(0);
  });
});
