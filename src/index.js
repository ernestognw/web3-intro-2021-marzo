const Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/867aee279b11429c8c9a32058619d8ca')

web3.eth.getBlock('latest').then(result => console.log(result))

window.ethereum.request({ method: 'eth_requestAccounts' }).then((acc) => {
  console.log(acc)
  web3.eth.sendTransaction({
    from: acc[0],
    value: '1000000000000000',
    to: '0x7f2Fa1a60e1713Ddc9FCdcA04fa8D90d0646365E'
  })
});
