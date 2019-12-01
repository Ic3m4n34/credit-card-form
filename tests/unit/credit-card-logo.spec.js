import { mount } from '@vue/test-utils';
import CreditCardLogo from '@/components/credit-card-logo';

describe('CreditCardLogo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CreditCardLogo);
  });

  it('renders component', () => {
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['credit-card-logo']));
  });

  it('displays default credit card', () => {

  });
});
