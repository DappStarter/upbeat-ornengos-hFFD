require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift response situate smile hover derive system gaze'; 
let testAccounts = [
"0xbe17b4ccab84f8313c191e351aca7386214249f52553a6b1a4380b6a2b6de5c0",
"0x535edc93c1cdaf3796a7270595a5e2f1621d512cb66d9fb7c2877cbe77a738db",
"0xf38e00b13d29b712c2b089eb590cc7e24e7a54bbae8b465d2ba40437e234bff0",
"0x66f4a0dc7ca5a44494ccc20ca3634fbd2d918b13b6a5b4479397a7436977ca0d",
"0x9016ac58eab15727bb6a0bd38d13fc389aec9176939f2e810ab07ce6bb69679a",
"0x0aa4afb28e2622bb016cccba71b02da77dca931615b45248dea30033a0482e80",
"0x241a4fd1f7e43f0f3f94f3033a075aeeea7d3e51bdb686d6e7a0b2dbc3af1693",
"0xf7f805b925b0795c185850a850758e287c81558fd1f3874e2a1e5d31db55c32b",
"0xeef432204f625df1a89ad69e789426118e196683d51b657c355205f47b3e8087",
"0x57149aed11dad931869cf460a49a3b41292b6fb6620ad6f34a6397d47c9eb2e1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

