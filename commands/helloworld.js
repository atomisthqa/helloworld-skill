exports.HelloWorld = () => ({
    intent: "hello world",
    listener: async ci => {

        const team = await ci.context.graphClient.query({
            name: "Team",
        });

        const params = await ci.promptFor({ name: { description: "Name of user"} });

        await ci.addressChannels(`Hello ${team.Team[0].name}`);
    },
});
