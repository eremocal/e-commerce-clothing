import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HwxMwCzRgybyrBc4QIfDVpSE4YcGIi4pQMJAcSMSerxCWIpkas9XkPSEBOKP9LkEcjbEsteMOZ0nBSk98yWUbk500686z0TlZ';

  const onToken = (token) => {
    console.log(token);
    alert('Payent Successful');
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
