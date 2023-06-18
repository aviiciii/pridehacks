import React from 'react';

const Donate = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle the payment submission using the Stripe API
    // Access the Stripe object or perform other necessary actions

    console.log('Payment submitted');
  };

  return (

      <form onSubmit={handleSubmit}>
        <label>
          Card Details:
          {/* <CardElement /> */}
        </label>
        <button type="submit">Donate</button>
      </form>

  );
};

export default Donate;
