import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import https from 'https';


const initializeTransaction = (req, res) => {
    // const params = JSON.stringify({
    //   email: req.body.email,
    //   amount: req.body.amount,
    // });

    const params = JSON.stringify({
      "email": "customer@email.com",
      "amount": "20000"
    })
  
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: `Bearer sk_test_126995834566f147156fbc8717595c5d6aca8445`,
        'Content-Type': 'application/json',
      },
    };
  
    const paystackReq = https.request(options, (paystackRes) => {
      let data = '';
  
      paystackRes.on('data', (chunk) => {
        data += chunk;
      });
  
      paystackRes.on('end', () => {
        res.status(200).json(JSON.parse(data));
      });
    });
  
    paystackReq.on('error', (error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    });
  
    paystackReq.write(params);
    paystackReq.end();
};

const placeOrder = (req, res) =>{

};

export {
    initializeTransaction,
    placeOrder
}

 