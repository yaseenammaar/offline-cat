import { clusterApiUrl, Connection, Keypair, PublicKey, SystemProgram, Transaction, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from "@solana/web3.js";
import bs58 from 'bs58';


export const createWallet = () => {
    const keypair = Keypair.generate();
    console.log("New Wallet", keypair);
    return {
        publicKey: keypair.publicKey.toString(),
        privateKey: [...keypair.secretKey] // Convert secret key to array for demonstration purposes
    };
};

export const transferFunds = async (fromSecretKeyArray, toPublicKeyString, amountSol) => {
        const secretKey = bs58.decode(fromSecretKeyArray);
        const connection = new Connection(clusterApiUrl('mainnet-beta'));
        const fromKeypair = Keypair.fromSecretKey(new Uint8Array(secretKey));
        const destination = new PublicKey(toPublicKeyString);
        const transferInstruction = SystemProgram.transfer({
          fromPubkey: fromKeypair.publicKey,
          toPubkey: destination,
          lamports: amountSol * LAMPORTS_PER_SOL,
        });
        let transaction = new Transaction().add(transferInstruction);
        try {
          const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [fromKeypair],
            {
              commitment: 'singleGossip',
              preflightCommitment: 'singleGossip',
            },
          );
      
          console.log('Transaction successful with signature:', signature);
          return signature;
        } catch (error) {
          console.error('Transaction failed:', error);
          throw error;
        }
   
  };
