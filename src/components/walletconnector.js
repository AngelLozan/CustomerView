import React, { useContext } from 'react';
import { WalletContext, WalletProvider } from '@viaprotocol/web3-wallets';

const NestedComponent = () => {
  const { connect, isConnected, address } = useContext(WalletContext);
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { wallet, name, email, subject, message } = e.target.elements;
    let conFom = {
      wallet: wallet.value,
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(conFom);
  };

  if (!isConnected) {
    return (
      <>
      <button className="btn btn-primary mt-3" type="button" onClick={() => connect({ name: 'MetaMask', chainId: 1 })}>
        Connect wallet
      </button>

      <div className="container mt-5">
        <h2 className="mb-3">ChainCare x Gemini Support Inquiry</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="wallet">
              Wallet Address
            </label>
            <input className="form-control" type="text" id="wallet" value={address} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <input className="form-control" type="text" id="subject" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      </>
    );
  }

  return (
    <>
      <p className="mt-3">
        <strong>Connected to: {address}</strong>
      </p>

      <div className="container mt-5">
        <h2 className="mb-3">ChainCare x Gemini Support Inquiry</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="wallet">
              Wallet Address
            </label>
            <input className="form-control" type="text" id="wallet" value={address} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <input className="form-control" type="text" id="subject" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </>
  );
};


export default NestedComponent;
