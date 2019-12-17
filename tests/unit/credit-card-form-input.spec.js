import { mount } from '@vue/test-utils';
import CreditCardFormInput from '@/components/credit-card-form-input';

describe('CreditCardFormInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CreditCardFormInput);
  });

  describe('rendering', () => {
    it('renders the component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it.todo('has a label', () => {

    });

    it.todo('has an input field', () => {

    });
    it.todo('input highlighted when focused', () => {});
  });

  describe('validation', () => {
    it.todo('', () => {});
  });
});
