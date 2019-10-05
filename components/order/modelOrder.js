export default class ModelOrder {
  constructor(contr) {
    this.controller = contr;
    this.userInputsValue = JSON.parse(
      localStorage.getItem('userInputsValue')
    ) || {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    };
  }

  getUserValueObj() {
    let userValueObj = JSON.parse(localStorage.getItem('userInputsValue'));

    if (!userValueObj) {
      userValueObj = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
      };
    }

    this.controller.transferFormValue(userValueObj);
  }

  makeValidationFormInputs(event) {
    const { target } = event;
    const input = target.id;
    const { value } = target;
    const { parentNode } = target;
    let reg;

    switch (input) {
      case 'firstName':
        reg = /^[A-Za-z]+$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: only alphabetic characters are allowed'
        );
        this.setInputsValueInLocalStorage('firstName', value);
        break;
      case 'lastName':
        reg = /^[A-Za-z]+$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: only alphabetic characters are allowed'
        );
        this.setInputsValueInLocalStorage('lastName', value);
        break;
      case 'email':
        reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: email address is invalid'
        );
        this.setInputsValueInLocalStorage('email', value);
        break;
      case 'phone':
        reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: number is not correct'
        );
        this.setInputsValueInLocalStorage('phone', value);
        break;
      case 'address':
        reg = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: Do not use intricate characters'
        );
        this.setInputsValueInLocalStorage('address', value);
        break;
      default:
        break;
    }
  }

  createMessage(match, value, parentNode, errMessage) {
    const span = document.createElement('span');

    if (match) {
      span.className = 'uk-label uk-label-success uk-margin-small-left';
      span.innerHTML = 'Success';
    } else if (value === '') {
      span.className = 'uk-label uk-label-warning uk-margin-small-left';
      span.innerHTML = '';
    } else {
      span.className = 'uk-label uk-label-warning uk-margin-small-left';
      span.innerHTML = errMessage;
    }

    this.controller.transferValidMessage(parentNode, span);
  }

  getTotalPriceModel() {
    const goods = JSON.parse(localStorage.getItem('goods'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    let totalPrice = 0;

    for (const key in cart) {
      goods.forEach(elem => {
        if (elem.id === Number(key)) {
          totalPrice += elem.price * cart[key];
        }
      });
    }
    this.controller.transferTotalPrice(totalPrice);
  }

  setInputsValueInLocalStorage(input, inputsValue) {
    this.userInputsValue[input] = inputsValue;

    localStorage.setItem(
      'userInputsValue',
      JSON.stringify(this.userInputsValue)
    );
  }
}
