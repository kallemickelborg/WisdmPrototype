import axios from "axios";

const formatNewsData = (newsdata) => {
  let formattedNewsData = [];

  newsdata.forEach((item) => {
    const formatedNewsItem = {
      ...item
    };

    formattedNewsData.push(formatedNewsItem);
  });

  return formattedNewsData;
};

export const getNewsData = async () => {
  try {
    const newsresponse = await axios.get(
      "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=U2RY4TXA0UM40IJ5"
    );

    const newsdata = newsresponse.newsdata;
    const formatedNewsResponse = formatNewsData(newsdata);

    return formatedNewsResponse;
  } catch (error) {
    console.log(error.message);
  }
};
