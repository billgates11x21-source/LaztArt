require("dotenv").config();
const axios = require("axios");

async function getQuote() {
  const res = await axios.get("https://api.1inch.io/v5.0/1/quote", {
    params: {
      fromTokenAddress: "0x...",
      toTokenAddress: "0x...",
      amount: "1000000000000000000"
    },
    headers: {
      Authorization: `Bearer ${process.env.ONEINCH_API_KEY}`
    }
  });

  console.log("💱 Quote:", res.data);
}

getQuote();
