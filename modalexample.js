const { Modal } = require('discord.js');

client.on('interactionCreate', async interaction => {

	if (interaction.commandName === 'modal') {
		let modal = new Modal()
			.setCustomId('testModel')
			.setTitle('Modals are here!');
		await interaction.showModal(modal);
	}
});
