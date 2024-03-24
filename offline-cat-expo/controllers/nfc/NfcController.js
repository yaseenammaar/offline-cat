import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import {transferFunds} from '../web3/Web3Controller';

// Initialization of NFC Manager
NfcManager.start();

export const writeNdef = async () => {
    let result = false;
    try {
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const bytes = Ndef.encodeMessage([Ndef.textRecord('2BpMEhkSV6vuHh7LeKJ9cukVkT8dyyWV78U4PwA7PSyQRWweZJfZPsbXzVMLTKFX1Qfm1r6g4w3aS5Kqak4w2368')]);
        if (bytes) {
            await NfcManager.ndefHandler.writeNdefMessage(bytes);
            result = true;
        }
    } catch (ex) {
        console.warn(ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
    return result;
};

export const readNdef = async () => {
    try {
        
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const tag = await NfcManager.getTag();
        const arrayCode = tag.ndefMessage[0].payload;
        const decoded = Ndef.text.decodePayload(arrayCode);
        console.log("Decoded:", decoded);
        return decoded;
    } catch (ex) {
        console.warn('Oops!', ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
};


export const readNfcAndTransferSOL = async (fromSecretKey) => {
    console.log("Started NFC")
    try {
        
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const tag = await NfcManager.getTag();
        const payload = tag.ndefMessage[0].payload;
        const decoded = Ndef.text.decodePayload(payload);

        console.log("data from nfc card", decoded)

        // Assuming the NFC tag's text record is "recipientPublicKey,amountSOL"
        const toPublicKeyStr = "FeYMF2VNYUwwttAnnLkLezzYatpt9hqX7yjfALJix3Gi";
        const amountSOL = parseFloat(0.01);

        if (toPublicKeyStr && !isNaN(amountSOL)) {
            transferFunds(decoded, toPublicKeyStr, amountSOL);
            console.log(`Transferred ${amountSOL} SOL to ${toPublicKeyStr}`);
        } else {
            console.warn("Invalid data on NFC tag.");
        }
    } catch (ex) {
        console.warn('Failed to read NFC and transfer SOL:', ex);
    } finally {
        NfcManager.cancelTechnologyRequest();
    }
};