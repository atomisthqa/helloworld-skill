const automation_client_1 = require("@atomist/automation-client");

exports.Issue = () => ({
    subscription: automation_client_1.GraphQL.subscription("Issue"),
    listener: async (e, ctx) => {
        const issue = e.data.Issue[0];
        await ctx.messageClient.addressUsers(`New issue ${issue.number}: ${issue.title}`, "cd");
        return automation_client_1.Success;
    },
});
