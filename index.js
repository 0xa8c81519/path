const ethers = require("ethers");
const { mnemonic } = require('./secret.js');
const log4js = require('log4js');
const config = require('./conf/conf.js');

log4js.configure(config.log4jsConfig);
const logger = log4js.getLogger('PATH');
let network = process.argv[2];
// 初始化rpc provider，浏览器中不需要
const provider = new ethers.providers.JsonRpcProvider(config.default[network].rpc.url);
let wallets = new Array();
for (let i = 0; i < config.default.accountsSize; i++) {
	let path = "m/44'/60'/0'/0/" + i;
	// 初始化助记词
	let walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic, path);
	// 初始化钱包
	let wallet = walletMnemonic.connect(provider);
	wallets.push(wallet);
}

let getPrivateKey = index => {
	logger.warn('wallet['+index+']\'s private key.');
	logger.warn(wallets[index].privateKey);
};

switch (process.argv[3]) {
	case 'getPrivateKey':
		getPrivateKey(process.argv[4]);
		break;
	default:
		break;
}
