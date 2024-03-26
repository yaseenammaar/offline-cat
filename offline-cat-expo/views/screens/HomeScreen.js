import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView } from 'react-native';
import { createWallet, transferFunds } from '../../controllers/web3/Web3Controller';
import { readNdef, writeNdef, readNfcAndTransferSOL } from '../../controllers/nfc/NfcController';
import BalanceCard from '../components/BalanceCard';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import FlipCardButton from '../components/FlipCardButton';
import { styles } from '../style/style'; 
import ListItem from '../components/ListItem';
import ButtonsGrid from '../components/ButtonsGrid';
import TopButtons from '../components/TopButtons';


export default function HomeScreen() {
    const [publicKey, setPublicKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

    const handleCreateWallet = () => {
        const { publicKey, privateKey } = createWallet();
        setPublicKey(publicKey);
        setPrivateKey(privateKey);
    };

    const handleTransferFunds = async () => {
        // if (!wallet) {
        //   alert('Please create a wallet first.');
        //   return;
        // }
    
        // if (!recipientPublicKey || !transferAmount) {
        //   alert('Please enter recipient public key and amount.');
        //   return;
        // }
    
        // try {
          await transferFunds("2qCYWiZz74eNaB8bYkaimaHd1Sb5ZTxrjxm5WcUCE4vZbpWmL85HDLkib5sVLfPEnN2sCNaWFnLnWKEzprsYYdFw", "3U6pFnWJxtoGEyFXNiQ6fBEUskidyPEcABfkSR5twBVj", parseFloat(0.1));
        //   alert('Transfer successful!');
        // } catch (error) {
        //   console.error('Transfer failed:', error);
        //   alert('Transfer failed. Check console for details.');
        // }
      };

      const handleNFCTransaction = async () => {
        readNfcAndTransferSOL("lol")
      }
      const handleLeftPress = () => {
        console.log('Left button pressed');
      };
    
      const handleRightPress = () => {
        console.log('Right button pressed');
      };
      

    return (
        
        <View>
            
            <TopButtons onLeftPress={handleLeftPress} onRightPress={handleRightPress} />
             <BalanceCard balance={20.91} onPress={() => console.log('Card pressed!')} />
             

             <ButtonsGrid/>
             <Text style={{marginTop: 80, marginLeft: 35, fontSize: 20, fontWeight: 'bold', color: '#D49092'}}>Recent Activities</Text>
             
             <ScrollView style={{margin: 30, marginTop: 20, marginBottom: 350}} >
                <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="23.2 SOL Sent"
                    description="Card Tap: lkmx...lsdo"
                />
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="12.1 SOL Received"
                    description="Card Tap: 0xzx...laq0"
                />
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="32.10 SOL Received"
                    description="Card Tap: FKme...2xMa"
                />
                 
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="0.1 SOL Received"
                    description="Card Tap: ...lsdo"
                />
                <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="23.2 SOL Sent"
                    description="Card Tap: lkmx...lsdo"
                />
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="12.1 SOL Received"
                    description="Card Tap: 0xzx...laq0"
                />
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="32.10 SOL Received"
                    description="Card Tap: FKme...2xMa"
                />
                 
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="0.1 SOL Received"
                    description="Card Tap: ...lsdo"
                />
                <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="23.2 SOL Sent"
                    description="Card Tap: lkmx...lsdo"
                />
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="12.1 SOL Received"
                    description="Card Tap: 0xzx...laq0"
                />
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="32.10 SOL Received"
                    description="Card Tap: FKme...2xMa"
                />
                 
                 <ListItem
                    imageUrl="https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png"
                    title="0.1 SOL Received"
                    description="Card Tap: ...lsdo"
                />
                 
                 
                {/* Add more ListItem as needed */}
                </ScrollView>
             {/* <View style={styles.buttonContainer}>
                <Button title="Create Wallet" onPress={handleCreateWallet} />

                <Button title="Transfer SOL" onPress={handleTransferFunds} />
                <Button title="Transfer SOL with NFC" onPress={handleNFCTransaction}/>
                 
                {/* <Button title="Import Wallet" onPress={handleImportWallet} /> 
                <Button title="Scan Tag" onPress={readNdef} />
                <Button title="Write Tag" onPress={writeNdef} />
            </View>  */}

               
            <StatusBar style="auto" />
            
        </View>
    );
}
