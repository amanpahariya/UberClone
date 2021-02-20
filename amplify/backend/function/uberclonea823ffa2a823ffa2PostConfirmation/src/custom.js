var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
    if (!event.request.userAttributes.sub) {
        console.log("Error: No user was written to DynamoDB");
        context.done(null, event);
        return;
    }
    // save new user to dynamodb
    const date = new Date();
    const params = {
        Item: {
            'id': { S: event.request.userAttributes.sub },
            '__typename': { S: 'User' },
            'username': { S: event.userName },
            'email': { S: event.request.userAttributes.email },
            'createdAt': { S: date.toISOString() },
            'updatedAt': { S: date.toISOString() },
        },
        TableName: process.env.USERTABLE,
    }
    try {
        await ddb.putItem(params).promise();
        console.log("success");
    } catch (error) {
        console.log("Error:", error);
    }

    context.done(null, event);

};