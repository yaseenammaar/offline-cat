import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

// Initialization of NFC Manager
NfcManager.start();

export const writeNdef = async () => {
    let result = false;
    try {
        await NfcManager.requestTechnology(NfcTech.Ndef);
        const bytes = Ndef.encodeMessage([Ndef.textRecord('YourTextHere')]);
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
