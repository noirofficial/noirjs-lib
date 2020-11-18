// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
  messagePrefix: '\x18Noir Signed Message:\n',
  bech32: 'nor',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x50,
  scriptHash: 0x35,
  wif: 0xD0,
};
export const regtest: Network = {
  messagePrefix: '\x18Noir Signed Message:\n',
  bech32: 'norrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x41,
  scriptHash: 0xB2,
  wif: 0xEF,
};
export const testnet: Network = {
  messagePrefix: '\x18Noir Signed Message:\n',
  bech32: 'tnor',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x34,
  wif: 0xC1,
};
