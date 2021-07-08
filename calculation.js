const ethers = require('ethers');

const a = ethers.BigNumber.from('100000000000000000000000000');
const amtPerMonth = a.div(24);
console.log(ethers.utils.formatEther(amtPerMonth));
const coefficient = ethers.BigNumber.from('1189207115002721000');
const t = ethers.BigNumber.from('750000000000000000000000000');
const e = ethers.BigNumber.from('10').pow(18);
const c=coefficient.pow(3).div(e.pow(3))
console.log(ethers.utils.formatEther(x));
