import type { Chain } from "../src/types";
export default {
  "name": "Canto",
  "chain": "Canto",
  "rpc": [
    "https://canto.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://canto.slingshot.finance",
    "https://canto.neobase.one",
    "https://mainnode.plexnode.org:8545",
    "https://canto.gravitychain.io/",
    "https://canto.evm.chandrastation.com/",
    "https://jsonrpc.canto.nodestake.top/",
    "https://canto.dexvaults.com/",
    "wss://canto.gravitychain.io:8546",
    "wss://canto.dexvaults.com/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Canto",
    "symbol": "CANTO",
    "decimals": 18
  },
  "infoURL": "https://canto.io",
  "shortName": "canto",
  "chainId": 7700,
  "networkId": 7700,
  "explorers": [
    {
      "name": "Canto EVM Explorer (Blockscout)",
      "url": "https://evm.explorer.canto.io",
      "standard": "none"
    },
    {
      "name": "Canto Cosmos Explorer",
      "url": "https://cosmos-explorers.neobase.one",
      "standard": "none"
    },
    {
      "name": "Canto EVM Explorer (Blockscout)",
      "url": "https://tuber.build",
      "standard": "none"
    }
  ],
  "testnet": false,
  "slug": "canto"
} as const satisfies Chain;