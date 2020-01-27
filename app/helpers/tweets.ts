import { Model } from "sequelize"
const TweetModel = require("../models/tweet")

export const getTweets = async function(count: number) {
  TweetModel.findAll({
    limit: count,
  }).then((tweets: [Model]) => {
    return tweets
  })
}
