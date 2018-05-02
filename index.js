

var INFURA_ROPSTEN_URL = 'https://ropsten.infura.io/gmXEVo5luMPUGPqg6mhy';
var INFURA_MAINNET_URL = 'https://mainnet.infura.io/gmXEVo5luMPUGPqg6mhy';

var Web3 = require('web3')

var web3 = new Web3()


const relayConfig = require('./relay.config').config
const accountConfig = require('./account.config').account.relay


var redisInterface = require('./lib/redis-interface')

var LavaPeerInterface =  require('./lib/lava-peer-interface');
var lavaPeerInterface = new LavaPeerInterface();

init(web3);


async function init(web3)
{
    console.log("Booting your Lava Relay Node...")

    await redisInterface.init();

    await lavaPeerInterface.init();

}
