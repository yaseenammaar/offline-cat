import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';
import { getPublicKeyFromPrivateKey, transferFunds } from '../web3/Web3Controller';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Common NFC Operations

const performNfcOperation = async (tech, alertMessage, operation) => {
    try {
        await NfcManager.requestTechnology(tech, { alertMessage });
        return await operation();
    } catch (ex) {
        console.log('NFC operation failed:', ex);
        return null;
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
};

// NFC Read

export const readNdef = async (alertMessage) => {
    return performNfcOperation(NfcTech.Ndef, alertMessage, async () => {
        const tag = await NfcManager.getTag();
        const payload = tag.ndefMessage[0].payload;
        return Ndef.text.decodePayload(payload);
    });
};

// NFC Write

export const writeNdef = async (text, alertMessage) => {
    return performNfcOperation(NfcTech.Ndef, alertMessage, async () => {
        const bytes = Ndef.encodeMessage([Ndef.textRecord(text)]);
        if (bytes) {
            await NfcManager.ndefHandler.writeNdefMessage(bytes);
            return true;
        }
        return false;
    });
};

// Transfer Funds

export const transferFundsViaNFC = async (amountSOL, text) => {
    const nfcData = await readNdef(text);
    if (nfcData) {
        try {
            console.log(nfcData)
            // Assuming the NFC tag's text record is "recipientPublicKey,amountSOL"
            const toPublicKeyStr = await getPublicKeyFromPrivateKey(nfcData)
            console.log("To Public Key", toPublicKeyStr);
            const senderPrivateKey = await AsyncStorage.getItem('privateKey')
            if (toPublicKeyStr && !isNaN(amountSOL)) {
                await transferFunds(senderPrivateKey, toPublicKeyStr, amountSOL);
                console.log(`Transferred ${amountSOL} SOL to ${toPublicKeyStr}`);
            } else {
                console.log("Invalid data for funds transfer.");
            }
        } catch (ex) {
            console.log('Failed to transfer funds via NFC:', ex);
        }
    } else {
        console.log("No NFC data available for funds transfer.");
    }
};

// Receive Funds

export const receiveFundsViaNFC = async (amountSOL, text) => {
    const nfcData = await readNdef(text);
    if (nfcData) {
        try {
            // Assuming the NFC tag's text record is "recipientPublicKey,amountSOL"
            const toPublicKeyStr = await AsyncStorage.getItem('publicKey')
            const senderPrivateKey = nfcData
            console.log("Receiving from ", senderPrivateKey, "on ", toPublicKeyStr);
            if (toPublicKeyStr && !isNaN(amountSOL)) {
                await transferFunds(senderPrivateKey, toPublicKeyStr, amountSOL);
                console.log(`Transferred ${amountSOL} SOL to ${toPublicKeyStr}`);
            } else {
                console.log("Invalid data for funds transfer.");
            }
        } catch (ex) {
            console.log('Failed to transfer funds via NFC:', ex);
        }
    } else {
        console.log("No NFC data available for funds transfer.");
    }
};

// Other NFC Operations...

// Add other NFC operations as needed
