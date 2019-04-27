/* eslint-disable no-inline-comments */

/**
 * Module dependencies.
 */

import { map, set } from 'lodash';

/**
 * Export available rpc methods.
 */

export default {
  abandonTransaction: { version: '>=0.12.0' },
  addMultiSigAddress: { version: '>=0.1.0' },
  addNode: { version: '>=0.8.0' },
  backupWallet: { version: '>=0.3.12' },
  clearBanned: { version: '>=0.12.0' },
  combineRawTransaction: { version: '>=0.15.0' },
  createMultiSig: { version: '>=0.1.0' },
  createRawTransaction: { version: '>=0.7.0' },
  decodeRawTransaction: { version: '>=0.7.0' },
  decodeScript: { version: '>=0.9.0' },
  disconnectNode: { version: '>=0.12.0' },
  dumpPrivKey: {
    obfuscate: {
      response: () => '******'
    },
    version: '>=0.6.0'
  },
  dumpWallet: { version: '>=0.9.0' },
  encryptWallet: {
    obfuscate: {
      request: {
        default: params => set([...params], '[0]', '******'),
        named: params => set(params, 'passphrase', '******')
      }
    },
    version: '>=0.1.0'
  },
  estimateFee: { version: '>=0.10.0' },
  estimateSmartFee: { version: '>=0.12.0' },
  fundRawTransaction: { version: '>=0.12.0' },
  generate: { version: '>=0.11.0' },
  generateToAddress: { version: '>=0.13.0' },
  getAddedNodeInfo: { version: '>=0.8.0' },
  getBalance: { version: '>=0.3.18' },
  getBestBlockHash: { version: '>=0.9.0' },
  getBlock: { version: '>=0.6.0' },
  getBlockCount: { version: '>=0.1.0' },
  getBlockHash: { version: '>=0.6.0' },
  getBlockHeader: { version: '>=0.12.0' },
  getBlockTemplate: { version: '>=0.7.0' },
  getBlockchainInfo: { version: '>=0.9.2' },
  getChainTips: { version: '>=0.10.0' },
  getConnectionCount: { version: '>=0.1.0' },
  getDifficulty: { version: '>=0.1.0' },
  getGenerate: { version: '<0.13.0' },
  getGeneratepos: { version: '<0.13.0' },
  getInfo: { version: '>=0.1.0' },
  getMempoolInfo: { version: '>=0.10.0' },
  getMiningInfo: { version: '>=0.6.0' },
  getNetTotals: { version: '>=0.1.0' },
  getNetworkHashPs: { version: '>=0.9.0' },
  getNetworkInfo: { version: '>=0.9.2' },
  getNewAddress: { version: '>=0.1.0' },
  getPeerInfo: { version: '>=0.7.0' },
  getRawChangeAddress: { version: '>=0.9.0' },
  getRawMempool: { version: '>=0.7.0' },
  getRawTransaction: { version: '>=0.7.0' },
  getReceivedByAddress: { version: '>=0.1.0' },
  getTransaction: { version: '>=0.1.0' },
  getTxOut: { version: '>=0.7.0' },
  getTxOutProof: { version: '>=0.11.0' },
  getTxOutSetInfo: { version: '>=0.7.0' },
  getUnconfirmedBalance: { version: '>=0.9.0' },
  getWalletInfo: { version: '>=0.9.2' },
  help: { version: '>=0.1.0' },
  importAddress: { version: '>=0.10.0' },
  importPrivKey: {
    obfuscate: {
      request: {
        default: () => ['******'],
        named: params => set(params, 'privkey', '******')
      }
    },
    version: '>=0.6.0'
  },
  importPubKey: { version: '>=0.12.0' },
  importWallet: { version: '>=0.9.0' },
  keypoolRefill: { version: '>=0.1.0' },
  listAddressGroupings: { version: '>=0.7.0' },
  listAddresses: { version: '>=0.1.0' },
  listBanned: { version: '>=0.12.0' },
  listLockUnspent: { version: '>=0.8.0' },
  listReceivedByAddress: { version: '>=0.1.0' },
  listSinceBlock: { version: '>=0.5.0' },
  listTransactions: { version: '>=0.3.18' },
  listUnspent: { version: '>=0.7.0' },
  lockUnspent: { version: '>=0.8.0' },
  ping: { version: '>=0.9.0' },
  prioritiseTransaction: { version: '>=0.10.0' },
  sendMany: { version: '>=0.3.21' },
  sendRawTransaction: { version: '>=0.7.0' },
  sendToAddress: { version: '>=0.1.0' },
  setBan: { version: '>=0.12.0' },
  setGenerate: { version: '<0.13.0' },
  setGeneratepos: { version: '<0.13.0' },
  setNetworkActive: { version: '>=0.14.0' },
  setTxFee: { version: '>=0.3.22' },
  signMessage: { version: '>=0.5.0' },
  signMessageWithPrivKey: {
    obfuscate: {
      request: {
        default: params => set([...params], '[0]', '******'),
        named: params => set(params, 'privkey', '******')
      }
    },
    version: '>=0.13.0'
  },
  signRawTransaction: {
    obfuscate: {
      request: {
        default: params => set([...params], '[2]', map(params[2], () => '******')),
        named: params => set(params, 'privkeys', map(params.privkeys || [], () => '******'))
      }
    },
    version: '>=0.7.0'
  },
  stop: { version: '>=0.1.0' },
  submitBlock: { version: '>=0.7.0' },
  upTime: { version: '>=0.15.0' },
  validateAddress: { version: '>=0.3.14' },
  verifyChain: { version: '>=0.9.0' },
  verifyMessage: { version: '>=0.5.0' },
  verifyTxOutProof: { version: '>0.11.0' },
  walletLock: { version: '>=0.1.0' },
  walletPassphrase: {
    obfuscate: {
      request: {
        default: params => set([...params], '[0]', '******'),
        named: params => set(params, 'passphrase', '******')
      }
    },
    version: '>=0.1.0'
  },
  walletPassphraseChange: {
    obfuscate: {
      request: {
        default: params => set(set([...params], '[0]', '******'), '[1]', '******'),
        named: params => set(set(params, 'oldpassphrase', '******'), 'newpassphrase', '******')
      }
    },
    version: '>=0.1.0'
  }
};
