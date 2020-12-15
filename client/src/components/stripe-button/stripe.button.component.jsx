import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HwxMwCzRgybyrBc4QIfDVpSE4YcGIi4pQMJAcSMSerxCWIpkas9XkPSEBOKP9LkEcjbEsteMOZ0nBSk98yWUbk500686z0TlZ';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successfull');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit or debit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-Commerce Clothing Company'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
