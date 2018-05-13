module.exports = function(msg, client) {
  //syntax [0 = name] [1 = url to check] [2 = frequency to check in hours] [3 = importance [1-5]] [4 expected result]
  var prams = msg.content.split(" ");

  var subcar = 0

  for (var i = 0; i < 5; i++) {
    var subcar = subcar + prams[i].length
    msg.reply(subcar)
  }

  msg.reply(subcar)

  msg.channel.send({embed: {
    color: 3447003,
    title: "New Serive Enroled",
    description: "The Service + been enroled" ,
    fields: [{
       name: "Name",
       value: "They can have different fields with small headlines."
     },
     {
       name: "Adress",
       value: "web address"
     },
     {
       name: "Expected Result",
       value: "somme stuff"
     }
   ],
   timestamp: new Date(),
   footer: {
     icon_url: client.user.avatarURL,
     text: "© Example"
   }
    }
  });
}
