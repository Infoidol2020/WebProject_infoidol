import React,{ useState, useRef , useEffect} from 'react'

const CopyClipboard = (props) => {
  const [referral,setreferral] = useState([]);
  // console.log('props from CopyClipboard  Page',props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet)

  useEffect(() => {
    setreferral(props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.Wallet)
}, [props.ApiFromReferralWallet.ReferralWallet.makeReferWalletApi.WalletSuccess])

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    // e.target.focus();
    setCopySuccess('Copied!');
  };
  useEffect(() => {
    if(copySuccess){
      setCopySuccess('Copied!');
      setTimeout(() => {
        setCopySuccess(false)
        textAreaRef.current.click()
        }, 2000);
    }
}, [copySuccess])

  return (
    <div>
      <h3>Referral Code</h3>
      <div>
        <span style={{color: 'green'}}>{copySuccess}</span>
      <form>
        <input
          ref={textAreaRef}
          value={referral.referal_code}
        />
      </form>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Copy</button> 
        </div>
      }
    </div>
    </div>
  )
}

export default CopyClipboard
