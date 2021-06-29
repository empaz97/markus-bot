const helpArtifact = {
  title: "How to Use Markus-Bot",
  url: "https://github.com/empaz97/markus-bot/blob/main/README.md",
  description: "Click the above link for a full list of commands!",
  footer: "Questions? Suggestions? Message my creator LizardEm#1067 on Discord",
  fields: [
    {
      name: "Choose From a List",
      value: "*Markus <pick or choose> : option1, option2, option3*"
    },
    {
      name: "Random Quote",
      value: `
      Basic Triggers:
      -*inspire me*
      -*say something inspirational*
      -*quote something*
      `
    },
    {
      name: "Random Piece of Art",
      value: `Common Triggers:
      -*show me a painting*
      -*show me some art*
      -*show me art*
      `
    }
  ]
};

const updateArtifact = {
  title: "Markus-Bot Updates",
  url: "https://github.com/empaz97/markus-bot/blob/main/docs/releaseLog.md",
  description: "Click the above link for a full release log!",
  footer: "Questions? Suggestions? Message my creator LizardEm#1067 on Discord",
  fields: [
    {
      name: "Updates",
      value: "Coming Soon"
    }
  ]
};

const embedCommands = {
  paintings: {
    noAnchor: true,
    commands: [
      "show me a painting",
      "show me some art",
      "show me art",
      "see some art",
      "see a painting",
      "show me a piece of art"
    ],
    artifacts: [
      {
        title: "Orange with Knife (1982)",
        author: "Mark Adams",
        description:
          "This is Connor's favorite piece of art, although I'm not sure why...",
        image:
          "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5576d828cfaf34dd488b4568/1762fcf795a4b263e52fd76f2f98584a.jpg"
      },
      {
        author: "CB",
        url: "https://twitter.com/randomnerdposts/status/1361881392683094016",
        description:
          "This wonderful painting was done by our very own CB. I can just feel the emotion in this piece",
        image:
          "https://pbs.twimg.com/media/EuZfseRXMAYYkVT?format=jpg&name=large"
      },
      {
        author: "Vanessa Stockard",
        url: "https://www.instagram.com/vanessastockard/",
        description:
          "This is a rather interesting painting that always makes me laugh",
        image:
          "https://i2.wp.com/thismagnificentlife.com/wp-content/uploads/2020/12/kevin_sound_30x30.jpg?w=800&ssl=1"
      },
      {
        author: "Michael Black",
        title: "Sisters. Synthetic Compassion",
        image:
          "https://cdnb.artstation.com/p/assets/images/images/027/755/493/large/michael-black-s1.jpg?1592456375",
        url: "https://www.artstation.com/artwork/AqwPlV",
        description:
          "A very moving piece which always makes me reflect on our past, present, and future"
      },
      {
        title: "Rainboots",
        author: "Ink the Artist",
        image:
          "https://64.media.tumblr.com/2f8dd985cd3ea2250f1ee2a026f0fc13/tumblr_poygmwaGB61w6ykkeo1_1280.jpg",
        url: "https://ink-the-artist.tumblr.com/post/183714256788/rainboots",
        description: "A wonderful use of colors and life!"
      },
      {
        author: "Selrah",
        image:
          "https://pbs.twimg.com/media/EySVpLbVEAQZEhK?format=jpg&name=4096x4096",
        description:
          "An amazing screenshot taken by our very own Selrah who has a great eye for wonderful shots"
      },
      {
        author: "Al Parker",
        image:
          "https://i.pinimg.com/originals/b2/55/47/b25547ac5cb5dfe716a9e53dd20c73d6.jpg",
        description:
          "An illustration which makes great use of bright colors and emotion"
      },
      {
        author: "Madeline Hutchinson",
        title: "I heard a star, I spoke to God",
        image:
          "https://images.squarespace-cdn.com/content/v1/56915867cbced6b74bc2682b/1506067394357-JLDYU6N5HB5KQMU3XPSB/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/I+heard+a+star+I+spoke+to+God+less+vibrant.jpg",
        url:
          "http://www.madelinehutchinsonart.com/paintings/iheardastarispoketogod",
        description: "A very reflective piece, in more ways than one"
      },
      {
        author: "David Tanner",
        title: "Home Cooking",
        image:
          "https://images.fasosites.com/19609_3600761xl.jpg?v=202104090803&cv=202104090803",
        url:
          "https://www.davidtannerfineart.com/portfolio-viewer?collection=39791#lg=1&artworkId=3600761",
        description:
          "There's something very domestic and intimate about this simple piece"
      }
    ]
  },
  orangeWithKnife: {
    noAnchor: true,
    commands: [
      "show me orange with knife",
      "show me connors favorite painting",
      "can i see orange with knife",
      "whats connors favorite painting"
    ],
    artifacts: [
      {
        title: "Orange with Knife (1982)",
        author: "Mark Adams",
        description: "*Sigh...* Here you go...",
        image:
          "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5576d828cfaf34dd488b4568/1762fcf795a4b263e52fd76f2f98584a.jpg"
      }
    ]
  },
  help: {
    commands: [
      "help me",
      "what can you do",
      "how do you work",
      "docs",
      "readme",
      "what are your commands",
      "your prompts",
      "!help"
    ],
    artifacts: [helpArtifact]
  },
  helpExact: {
    commands: ["markus help"],
    exact: true,
    artifacts: [helpArtifact]
  },
  updates: {
    commands: [
      "whats new",
      "do you have any updates",
      "can you do anything new"
    ],
    artifacts: [updateArtifact]
  }
};

module.exports = embedCommands;
