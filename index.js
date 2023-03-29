require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

client.on(`messageCreate`, (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "Lucero") {
    message.reply("Josh is cooler then Lucero");
  }

  if (message.content === "Josh") {
    message.reply("Josh is the King of Every People. Bow Down SUkkkuuuusssss");
  }

  if (message.content === "Who is the best teacher") {
    message.reply("Amanduuuuuuuuuh");
  }

  if (message.content === "What is the best snack") {
    message.reply("Picklesssssssssss");
  }

  if (message.content === "Leah") {
    message.reply("Leah is a Juji Goddddddd");
  }

  if (message.content === "Neil") {
    message.reply("Did you know Neil met Lizzo that one time");
  }

  if (message.content === "Mike") {
    message.reply("Creator of Crazy Coffee Friday's. Fiend of Caffene");
  }

  if (message.content === "Edward") {
    message.reply("All I want to do is say his name in a British Accent");
  }

  if (message.content === "Anna") {
    message.reply("Pickle Queen, Coding Machine, Fit game: Supreme");
  }

  if (message.content === "Steven") {
    message.reply(
      "Likes to flex how Rich he is by showing off his many houses"
    );
  }

  if (message.content === "Beth") {
    message.reply("Straight Vibesssssssss");
  }

  if (message.content === "Luke") {
    message.reply("The Meme Machineeeeeeeeeee. Also LI is Garbage");
  }

  if (message.content) {
    message.reply(
      "https://sites.google.com/a/ausdg.us/force-and-motion/the-entire-bee-movie-script"
    );
  }
});

client.login(process.env.BOT_TOKEN);
