export default class ModelOrder {
  constructor() {
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

  getUserValueObj(transferFormValue) {
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

    transferFormValue(userValueObj);
  }

  makeValidationFormInputs(event, transferValidMessage) {
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
          'Error: only alphabetic characters are allowed',
          transferValidMessage
        );
        this.setInputsValueInLocalStorage('firstName', value);
        break;
      case 'lastName':
        reg = /^[A-Za-z]+$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: only alphabetic characters are allowed',
          transferValidMessage
        );
        this.setInputsValueInLocalStorage('lastName', value);
        break;
      case 'email':
        reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: email address is invalid',
          transferValidMessage
        );
        this.setInputsValueInLocalStorage('email', value);
        break;
      case 'phone':
        reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: number is not correct',
          transferValidMessage
        );
        this.setInputsValueInLocalStorage('phone', value);
        break;
      case 'address':
        reg = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/;
        this.createMessage(
          value.match(reg),
          value,
          parentNode,
          'Error: Do not use intricate characters',
          transferValidMessage
        );
        this.setInputsValueInLocalStorage('address', value);
        break;
    }
  }

  createMessage(match, value, parentNode, errMessage, transferValidMessage) {
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

    transferValidMessage(parentNode, span);
  }

  getTotalPriceModel(transferTotalPrice) {
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
    transferTotalPrice(totalPrice);
  }

  setInputsValueInLocalStorage(input, inputsValue) {
    this.userInputsValue[input] = inputsValue;

    localStorage.setItem(
      'userInputsValue',
      JSON.stringify(this.userInputsValue)
    );
  }

  notify(firstName, lastName, email, phone, address, totalPrice) {
    const info = `${firstName.value} ${lastName.value} ${email.value} ${phone.value} ${address.value} ${totalPrice.innerHTML}`;

    fetch(
      `https://api.telegram.org/bot744059758:AAELsDJ3Df6N3y0zM_OIV8e2q2GTzvHOfEQ/sendmessage?chat_id=102249236&text=${info}`
    );
  }

  createDataForEmailSend(firstName, lastName, email, totalPrice) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const goods = JSON.parse(localStorage.getItem('goods'));
    const arrOrder = [];

    for (const key in cart) {
      goods.forEach(elem => {
        if (elem.id === Number(key)) {
          const obj = {
            name: elem.name,
            quantity: cart[key],
            price: elem.price
          };
          arrOrder.push(obj);
        }
      });
    }
    this.sendEmail(firstName, lastName, email, totalPrice, arrOrder);
  }

  sendEmail(firstName, lastName, email, totalPrice, arrOrder) {
    const url = 'http://so2niko.zzz.com.ua/ss/api.php?data=';
    const data = {
      mail: email.value,
      name: `${firstName.value} ${lastName.value}`,
      purchase_data: arrOrder,
      total_price: totalPrice.innerHTML
    };
    fetch(url + JSON.stringify(data), { mode: 'no-cors' });
  }
}
