define({
  api: [
    {
      type: "get",
      url: "/tweet",
      title: "Save a tweet",
      name: "SaveTweet",
      group: "Tweet",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "id",
              description: "<p>Users unique ID.</p>",
            },
          ],
        },
      },
      version: "0.0.0",
      filename: "app/controller/routes/tweets.ts",
      groupTitle: "Tweet",
    },
  ],
})
