
var relayconfig = {
  name:'A cool relay node',
  seedNodes: [
    {address:'104.131.112.200:9774'},

  ],
  priceOracleURL: null,
  minGasPriceWei: 10,
  maxGasPriceWei: 6,
  profitMarginPercent: 20,
  web3provider: 'http://localhost:8545',
  allowTestPackets: true,
  environment: 'test'
}


exports.config = relayconfig;
