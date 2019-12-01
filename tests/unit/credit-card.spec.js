import { mount } from '@vue/test-utils';
import CreditCard from '@/components/credit-card';

describe('CreditCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CreditCard);
  });

  describe('rendering', () => {
    it('renders the component', () => {
      expect(wrapper.classes()).toEqual(expect.arrayContaining(['credit-card']));
    });

    it('contains CreditCardLogo component', () => {
      expect(wrapper.find({ name: 'CreditCardLogo' }).exists()).toBe(true);
    });

    it('contains CreditCardNumber component', () => {
      expect(wrapper.find({ name: 'CreditCardNumber' }).exists()).toBe(true);
    });

    it('contains CreditCardHolder component', () => {
      expect(wrapper.find({ name: 'CreditCardHolder' }).exists()).toBe(true);
    });

    it('contains CreditCardExpirationDate component', () => {
      expect(wrapper.find({ name: 'CreditCardExpirationDate' }).exists()).toBe(true);
    });

    it('contains CreditCardCvvNumber component', () => {
      expect(wrapper.find({ name: 'CreditCardCvvNumber' }).exists()).toBe(true);
    });
  });

  describe('appearance', () => {
    it('renders correct background-color', () => {

    });
  });
});
