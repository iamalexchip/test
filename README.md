# Yoco React SDK stories

> :warning: This is just a demo for yoco react sdk docs

Yoco offers you the quickest and easiest way to process card payments - both in-person, and on your online store.

## Usage

### Popup

The Yoco Popup offers you the quickest and easiest way to accept online card payments

```jsx
import { useYocoPopUp } from "yoco-react-sdk";

function App() {
  const { ready, result, showPopUp } = useYocoPopUp();
  console.log(result);

  return (
    <div>
      <button
        disabled={!ready}
        onClick={() =>
          showPopUp({
            amountInCents: 2799,
            name: "Your Store or Product",
            description: "Awesome description",
            onCancel: () => console.log("canceled"),
          })
        }
      >
        Pay
      </button>
    </div>
  );
}
```

The usePopUp hook receives one parameter the public key.

```jsx
const YocoPopup = usePopUp("pk_test_ed3c54a6gOol69qa7f45");
```

This returns an object with the following props

```jsx
const { ready, showPopUp, result } = usePopUp;
```

| Prop      | Datatype     | Description                                                                                      |
| --------- | ------------ | ------------------------------------------------------------------------------------------------ |
| ready     | boolean      | Is true when the the sdk js has loaded successfuly                                               |
| showPopUp | func         | The function for showing a                                                                       |
| result    | object\|null | The result of the payment. This Contains the token that your server can use to capture a payment |

`showPopUp` method has the following prameters

| Parameter          | Description                                                                                                                                                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amountInCents      | Amount you would like to charge the customer as part of this payment. This is a required field for creating a charge and the amount can not be increased once a token is created.                                                                    |
| onCancel           | This function is called when the user cancels the payment by closing the popup window.                                                                                                                                                               |
| name               | The name you would like to show in the popup header. Typically the name of your store or the product being sold.                                                                                                                                     |
| description        | A description of the product or service being purchased.                                                                                                                                                                                             |
| image              | URL link that is pointing to an image that will be shown in the popup header. This is typically your logo or a product image. It will be displayed in a circle.                                                                                      |
| metadata           | A map of key value pairs that allow you to store extra data related to this payment. We will save the data alongside the payment. Whenever you fetch the payment with our API, we’ll also include the metadata. You can use up to approximately 1kB. |
| customer.email     | The email address of the end customer that you are billing. This will help the customer's bank verify that the transaction is legitimate.                                                                                                            |
| customer.phone     | The phone number of the end customer you are billing. This will help the customer's bank verify that the transaction is legitimate                                                                                                                   |
| customer.firstName | The first name of the card holder you are billing. This will help the customer's bank verify that the transaction is legitimate                                                                                                                      |
| customer.lastName  | The last name of the card holder you are billing. This will help the customer's bank verify that the transaction is legitimate.                                                                                                                      |

### Inline

Inline creates a secure and simple way for you to collect payments quickly.

Inline integrates into your existing checkout page to create a seamless customer experience. A card entry form will be injected into your existing website. You can customise the look of the form using standard CSS.

```jsx
import { YocoInline } from "yoco-react-sdk";

function App() {
  return (
    <YocoInline
      amountInCents={200}
      showSubmitButton
      onReady={() => console.log("form ready")}
      onSubmit={() => console.log("submited")}
      onResult={(result) => console.log("result", result)}
      onError={(error) => console.log("result", error)}
    />
  );
}
```

Yoco inline props

| Prop               | Datatype | Description                                                                                                                                                                                                                                          |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| publicKey          | string   | Your intergration key                                                                                                                                                                                                                                |
| amountInCents      | number   | Amount you would like to charge the customer as part of this payment. This is a required field for creating a charge and the amount can not be increased once a token is created.                                                                    |
| description        | string   | A description of the product or service being purchased.                                                                                                                                                                                             |
| metadata           | object   | A map of key value pairs that allow you to store extra data related to this payment. We will save the data alongside the payment. Whenever you fetch the payment with our API, we’ll also include the metadata. You can use up to approximately 1kB. |
| customer.email     | string   | The email address of the end customer that you are billing. This will help the customer's bank verify that the transaction is legitimate.                                                                                                            |
| customer.phone     | string   | The phone number of the end customer you are billing. This will help the customer's bank verify that the transaction is legitimate                                                                                                                   |
| customer.firstName | string   | The first name of the card holder you are billing. This will help the customer's bank verify that the transaction is legitimate                                                                                                                      |
| customer.lastName  | string   | The last name of the card holder you are billing. This will help the customer's bank verify that the transaction is legitimate.                                                                                                                      |
| showErrors         | boolean  | If you would like Inline to show error messages for you so that you do not have to handle this yourself. Defaults to false                                                                                                                           |
| showSubmitButton   | boolean  | If you would like Inline to create a submit button for you that will submit the form. When you do this you will have to listen for the card_tokenized event. Defaults to false                                                                       |
| submitButtonText   | string   | If you have chosen to let Inline create a submit button on your behalf this method tells inline what text you want to put into the submit button. Defaults to "Pay"                                                                                  |
| onReady            | func     | Triggered when the inline payment form has been loaded onto your page and the user can interact with it.                                                                                                                                             |
| onSubmit           | func     | Triggered when the inline payment form has been submitted.                                                                                                                                                                                           |
| onResult           | func     | Triggered when on a successful tokenization events.                                                                                                                                                                                                  |
| onError            | func     | Triggered when there is an error subitting the form.                                                                                                                                                                                                 |
