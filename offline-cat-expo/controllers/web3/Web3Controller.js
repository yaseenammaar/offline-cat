import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from "@solana/web3.js";
import bs58 from 'bs58';
import nacl from 'tweetnacl';

export const createWallet = () => {
  console.log("New Wallet", Keypair);
  let keypair_ = Keypair.generate();
  console.log("New Wallet Next", keypair_);
  
};

export const getPublicKeyFromPrivateKey = (privateKey) => {
  try {
    // const decodedPrivateKey = Buffer.from("2BpMEhkSV6vuHh7LeKJ9cukVkT8dyyWV78U4PwA7PSyQRWweZJfZPsbXzVMLTKFX1Qfm1r6g4w3aS5Kqak4w2368", 'base64');

   const base58PrivateKey = privateKey;
    // const base58PrivateKey = '[91,148,254,87,251,247,102,167,13,179,193,166,23,237,8,179,138,80,127,101,159,95,188,153,178,240,77,84,86,128,237,174,183,83,55,49,120,228,179,187,105,59,121,25,230,208,150,206,90,90,160,28,122,201,198,104,78,128,185,156,81,61,64,58]';
    const decodedPrivateKey = bs58.decode(base58PrivateKey);
    const keypairSec = Keypair.fromSecretKey(decodedPrivateKey);
    const publicKey = keypairSec.publicKey.toString();
    console.log("Success", publicKey)
    return publicKey;
  } catch (error) {
    console.error('Error getting public key from private key:', error);
    return null;
  }
};


// export const fetchBalance = async (publicKeyString) => {
  export const fetchBalance = async (publicKeyString) => {
  
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
  // const publicKey = new PublicKey(publicKeyString);
  const publicKey = new PublicKey("7DoT7uf9uGzxAALcT8ErWqWVQv1koFtLr9JntDxP5bSc");

  try {
      const balanceInLamports = await connection.getBalance(publicKey);
      const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
      console.log(`Balance for ${publicKeyString}: ${balanceInSOL} SOL`);
      return balanceInSOL;
  } catch (error) {
      console.error('Failed to fetch balance:', error);
      throw error;
  }
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
