const { readdirSync } = require("fs")

module.exports = client => {
  const eventFolder = readdirSync('./src/Events')
  
  for (dir of eventFolder) {
    const folderFiles = readdirSync(`./src/Events/${dir}/`).filter(d => d.endsWith('.js'));

    for (file of folderFiles) {
      const eventFile = require(`../Events/${dir}/${file}`);
      const eventName = file.split('.js')[0];
      client.on(eventName, eventFile.bind(null, client));
    };
  };
}
