const graphQL_1 = require("@atomist/automation-client/lib/graph/graphQL");
const HandlerResult_1 = require("@atomist/automation-client/lib/HandlerResult");
exports.Issue = () => ({
    subscription: graphQL_1.subscription("Issue"),
    listener: async (e, ctx) => {
        const issue = e.data.Issue[0];
        await ctx.messageClient.addressUsers(`New issue ${issue.number}: ${issue.title}`, "cd");
        return HandlerResult_1.Success;
    },
});
