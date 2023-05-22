import create  from '@pinata/sdk';
import * as dov from 'dotenv'

dov.config();

const pinataApiKey = process.env.PINATA_SDK_API_KEY;
const pinataSecretApiKey = process.env.PINATA_SDK_API_SECRET;
const client = new create(pinataApiKey, pinataSecretApiKey);
 
const jsonData = {
  name: "John",
  age: 30,
  city: "New York"
};
 
async function uploadToIPFS(jsonData: object) {
  const options = {
    pinataMetadata: {
      name: 'myFile.json'
    },
    PinataPinOptions: {
      cidVersion: 0
    }
  };
 
  const result = await client.pinJSONToIPFS(jsonData, options);
  console.log(result);
}
 
uploadToIPFS(jsonData);
