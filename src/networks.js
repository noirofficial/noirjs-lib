'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18Noir Signed Message:\n',
  bech32: 'nor',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x50,
  scriptHash: 0x35,
  wif: 0xd0,
};
exports.regtest = {
  messagePrefix: '\x18Noir Signed Message:\n',
  bech32: 'norrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x41,
  scriptHash: 0xb2,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Noir Signed Message:\n',
  bech32: 'tnor',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x34,
  wif: 0xc1,
};
