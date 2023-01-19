import axios from "axios";

const formatData = async (data) => {
  return data.feed.map((item) => {
    return {
      title: item.title,
      source: item.source,
      summary: item.summary,
      url: item.url,
      banner_image: item.banner_image,
      timestamp: item.timestamp,
      overall_sentiment_score: item.overall_sentiment_score,
      overall_sentiment_label: item.overall_sentiment_label,
      ticker: !!item.ticker_sentiment[0] ?
        item.ticker_sentiment.map((item) => {
          return item.ticker
        }) :
        undefined
    }
  })
}

export const getNewsData = async () => {
  try {
    const newsResponse = await axios.get(
      "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=U2RY4TXA0UM40IJ5"
    );
    const data = await newsResponse.data;
    const formattedData = await formatData(data);

    return formattedData
  } catch (error) {
    console.log(error.message);
  }
};