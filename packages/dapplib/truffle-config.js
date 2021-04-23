require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arena other seed dance cruise million purpose include produce bone submit'; 
let testAccounts = [
"0xc80d46f604191b6e7c4c9c5a3137a583ba088b4d4e6a44b5d992efffaa46a83b",
"0x6ff29eb53e79763488106607792e564193d205d63b85ca7805d1ee42110868f7",
"0x855df3c117f2938d27d76c60bcbaead1dd1bc78f684eedbf701330d98e05a606",
"0x99c55da87270e85ab286eed37080dfd4105111124f46ec0e8f9fbf5c02e05f20",
"0x95828cf34d1cf2d6bb0b772185925bcb37f76d79abe8b4690625439200ea2a0c",
"0x7254043a6bc4582ab0e70da5a19d0033b846637578d48e31cf0bdb0214cb6672",
"0x3c2e44b19a32d2803ba87cf2319b687918bd60648636f00ec1c7637061f1b3a4",
"0x396c9e13fd9ffa8440ebf29096b0ca1f0b8771f81728b537067aa4080d9dde58",
"0xfb4e78a113228003558c3371c3a901773a7cc429b385956ba133c82534d7deae",
"0x6a5b4176fa8796ae993769d7598ddb8a2583a48e5d5dff878e001e60b49b0839"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


