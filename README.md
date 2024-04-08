# Offline - Use crypto without internet (💪🏼+⚡️+🪴)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yaseenammaar/offline-cat/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/yaseenammaar/offline-cat)](https://github.com/yaseenammaar/offline-cat/issues)
[![GitHub stars](https://img.shields.io/github/stars/yaseenammaar/offline-cat)](https://github.com/yaseenammaar/offline-cat/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yaseenammaar/offline-cat)](https://github.com/yaseenammaar/offline-cat/network)

## Description

Offline is a tool that allows you to use crypto without internet, providing a green solution. The idea is to store private keys in an NFC chip and create an interface for interaction, similar to what we do with credit and debit cards. Just tap your Offline card to make payments and sign transactions, making it as easy as using Apple Pay and addable to Apple Wallet. Scale your applications with Offline SDK, enabling simple integration to make dApp support offline web3 transactions. Enjoy the benefits of disposable and eco-friendly wallets.

## Screenshots

<img src="https://github.com/yaseenammaar/offline-cat/assets/47599553/232d0f4c-e33e-4ea8-8202-53bce1f4bce0" width="300" height="600">

<img src="https://github.com/yaseenammaar/offline-cat/assets/47599553/4c88d3a1-c233-4895-90d2-914a4251b963" width="300" height="600">

<img src="https://github.com/yaseenammaar/offline-cat/assets/47599553/e5b39b9d-0fdc-4a83-bc54-ce3a764dc138" width="300" height="600">

## Installation

To install and run the Offline React app, follow these steps:

1. Clone the repository:

```git clone https://github.com/yaseenammaar/offline-cat.git```

2. Navigate to the project directory:

```cd offline-cat```

3. Install dependencies:

```npm install```

4. Navigate to the iOS directory:

```cd ios```

5. Install CocoaPods dependencies:

```pod install```

## Usage

To run the Offline React app on an iOS device, follow these steps:

1. Ensure you have Xcode installed on your system.

2. Open the project directory in Terminal and run:

```react-native run-ios --list-devices```

This will list the available iOS devices connected to your system. Note down the device identifier you want to use.

3. Run the app on the desired device:

```react-native run-ios --device <device_identifier>```

Replace `<device_identifier>` with the identifier of the desired device obtained from the previous step.

4. The app should now launch on the selected iOS device.


## Offline SDK (Work in Progress) 🚧

### Introduction:

Offline SDK is currently under development to extend the capabilities of Offline, enabling seamless integration with decentralized applications (dApps) for offline web3 transactions. With the Offline SDK, developers can empower their applications with the ability to interact with blockchain networks even without an internet connection. Stay tuned for updates as we work to bring this feature to life!

### Getting Started with Offline Web3 SDK:

To integrate Offline Web3 SDK into your app, follow these steps:

1. **Install the SDK**:
   ```npm install @offline/web3-sdk```

2. **Import the SDK** into your React Native app:
   ```import OfflineWeb3 from '@offline/web3-sdk';```

3. **Initialize the SDK** with your preferred blockchain network:
   ```const offlineWeb3 = new OfflineWeb3('solana', 'mainnet-beta'); // Example: Ethereum on Ropsten testnet```

4. **Use SDK Methods** to perform transactions:
   ```const transaction = {
     from: '0x123...',
     to: '0xabc...',
     value: '1000000000000000', // 0.001 ETH
   };

   offlineWeb3.sendTransaction(transaction)
     .then((result) => {
       console.log('Transaction successful:', result);
     })
     .catch((error) => {
       console.error('Transaction failed:', error);
     });```

### Note:

The Offline SDK is currently in development and not yet completed. The provided code is for demonstration purposes only and may not reflect the final implementation. We appreciate your patience and understanding as we work on delivering this feature.

You can copy this code and replace the existing content in your README.md file. Let me know if you need any further assistance!


## Zero Carbon 🌱

In today's fast-paced digital world, being eco-conscious isn't just a trend, it's a necessity. Offline takes a playful jab at carbon footprints and offers a zero carbon solution for your crypto needs. 

🌍 **Global Impact**: By eliminating the need for constant internet connection, we're reducing carbon emissions equivalent to planting thousands of trees. Talk about making Mother Earth smile!

🌞 **Sun-Powered Transactions**: With Offline, your transactions are as clean as solar energy. No more relying on fossil fuels for your crypto endeavors. 

♻️ **Eco-Friendly Wallets**: Say goodbye to carbon-heavy hardware wallets. Offline offers disposable wallets that are as green as they come. It's like recycling, but for your crypto!

## Eco-Friendly Features 🌿

### Advantages of Offline Green Wallets:

1. **Simpler Production**: Manufactured with fewer materials and less energy, making them environmentally friendlier.

2. **No Electricity Needed for Operation**: Powered by the NFC reader during transactions, which means they do not consume electricity on their own.

3. **Minimal Operational Energy**: Their operational carbon footprint is negligible due to the absence of a continuous power requirement.

4. **Easier Disposal**: The straightforward design allows for potentially easier recycling, though electronics still need careful disposal.

5. **No Technical Hassle**: They are straightforward to use without the need for technical setup or maintenance.

6. **Easy to Activate**: Can be activated with a simple tap to an NFC-enabled device in less than 5 seconds, offering a hassle-free user experience. Fully anonymous and decentralized.

### Hardware Wallet Disadvantages:

1. **More Complex Production**: The assembly of diverse electronic components makes their production more resource-intensive.

2. **Higher Operational Energy**: Require external power sources, leading to higher energy consumption during their operational life.

3. **Complex Disposal**: Disposal is more challenging due to the mix of materials and electronics, which complicates recycling efforts.

4. **Technical Setup Required**: Users may need to go through a setup process, including installing software or configuring the wallet.

5. **Activation and Operation**: Involves more steps to activate and use, potentially presenting a barrier for non-technical users.

### Per Transaction Cost:

- Bitcoin costs 18 trees 🌳
- Ethereum costs 4-5 trees 🌴 (Pre-Merge)
- Ethereum: 1-2 leaf 🍀 (Post-Merge)
- Solana: <1 leaf ☘️

**Toward a Greener World, One SOL at a Time** 🎋

