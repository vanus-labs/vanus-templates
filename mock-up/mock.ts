[
    {
        sinkIcon: "discord",
        source: "github",
        sink: "discord",
        description:
            "The maintenance team of the GitHub repo can receive real-time notifications on Discord when someone gives a star to their repo.",
        subTitle: "GitHub star event triggers a Discord message",
        id: "20230320_1",
    },

    {
        sinkIcon: "discord",
        source: "github",
        sink: "discord",
        description:
            "The maintenance team of the GitHub repo can receive real-time notifications on Discord when someone creates an issue on their repo.",
        subTitle: "GitHub issue event triggers a Discord message",
        id: "20230320_2",
    },

    {
        sinkIcon: "discord",
        source: "github",
        sink: "discord",
        description:
            "The maintenance team of the GitHub repo can receive real-time notifications on Discord when someone creates an issue comment on their repo.",
        subTitle: "GitHub issue comment event triggers a Discord message",
        id: "20230320_3",
    },

    {
        sinkIcon: "discord",
        source: "github",
        sink: "discord",
        description:
            "The maintenance team of the GitHub repo can receive real-time notifications on Discord when anyone opens a pull-request.",
        subTitle: "GitHub opened pull-request event triggers a Discord message",
        id: "20230321_1",
    },

    {
        sinkIcon: "feishu",
        source: "auth0",
        sink: "feishu",
        description:
            "The Auth0 Client can receive real-time notifications of user's activity on Feishu when someone logs in to their account.",
        subTitle: "Auth0 login event triggers a Feishu message",
        id: "20230323_1",
    },

    {
        sinkIcon: "slack",
        source: "auth0",
        sink: "slack",
        description:
            "The Auth0 Client can receive real-time notifications of user's activity on Slack when someone logs in to their account.",
        subTitle: "Auth0 login event triggers a Slack message",
        id: "20230323_2",
    },

    {
        sinkIcon: "discord",
        source: "auth0",
        sink: "discord",
        description:
            "The Auth0 Client can receive real-time notifications of how many times a user is logged in to their account with the associated IP address",
        subTitle: "Auth0 loginCount event triggers a Discord message with login counts and associated IP adddress.",
        id: "20230326_1",
    },

    {
        sinkIcon: "slack",
        source: "auth0",
        sink: "slack",
        description:
            "The Auth0 Client can receive real-time notifications on Slack of how many times a user is logged in to their account with the associated IP address",
        subTitle: "Auth0 loginCount event triggers a Slack message with login counts and associated IP adddress.",
        id: "20230327_1",
    },

    {
        sinkIcon: "feishu",
        source: "auth0",
        sink: "feishu",
        description:
            "The Auth0 Client can recieve real-time notifications of how many times a user is logged in to their account with the associated IP address",
        subTitle: "Auth0 loginCount event triggers a Feishu message with login counts and associated IP address.",
        id: "20230327_2",
    },

    {
        sinkIcon: "slack",
        source: "aws-billing",
        sink: "slack",
        description: "Receieve real-time notification on a Slack Channel for you AWS Billing",
        subTitle: "AWS Billing event triggers a Slack message",
        id: "20230406_1",
    },

    {
        sinkIcon: "discord",
        source: "amazon-eventbridge",
        sink: "discord",
        description:
            "Receive real-time notifications on Discord when someone uses Amazon S3 to create or delete Bucket.",
        subTitle: "Amazon EventBridge CreateBucket | DeleteBucket event triggers a Discord message",
        id: "20230406_2",
    },

    {
        sinkIcon: "discord",
        source: "stripe",
        sink: "discord",
        description: "Receive Real time notification of Stripe Invoice Payment on Discord",
        subTitle: "Stripe Invoice Payment event triggers a Discord message",
        id: "20230407_1",
    },

    {
        sinkIcon: "slack",
        source: "amazon-eventbridge",
        sink: "slack",
        description: "Receive real-time notifications on a Slack Channel when someone uses Amazon S3 to create or delete Bucket.",
        subTitle: "Amazon EventBridge CreateBucket | DeleteBucket event triggers a Slack message",
        id: "20230412_1",
    },

    {
        sinkIcon: "discord",
        source: "aws-billing",
        sink: "discord",
        description: "Receive real-time notification on Discord for your AWS Billing",
        subTitle: "AWS Billing event triggers a Discord message",
        id: "20230410_1",
    },

    {
        sinkIcon: "mysql",
        source: 'github',
        sink: 'mysql',
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on MySQL when someone stars their repo.",
        "subTitle": "Github Star Event Triggers a new row on MySQL",
        "id": '20230504_1'
    },

    {
        sinkIcon: "mysql",
        source: 'github',
        sink: 'mysql',
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on MySQL when someone creates a new issue on their repo.",
        "subTitle": "Github Issue create event triggers a new row on MySQL",
        "id": '20230504_2'
    },

    {
        sinkIcon: "mysql",
        source: 'github',
        sink: 'mysql',
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on MySQl when someone creates a new issue comment on their repo.",
        "subTitle": "Github Issue create comment event triggers a new row on MySQL",
        "id": '20230504_3'
    },

    {
        sinkIcon: "mysql",
        source: 'github',
        sink: 'mysql',
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on MySQL when someone creates a new pull-request on their repo.",
        "subTitle": "Github pull-request event triggers a new row on MySQL",
        "id": '20230504_4'
    },

    {
        sinkIcon: "discord",
        source: "stripe",
        sink: "discord",
        "description": "Receive real-time notification on discord stating the cash sender, amount, bank name and the ending cash balance of the customer.",
        "subTitle": "Stripe cash balance event triggers a discord message",
        "id": "20230518_1"
    },

    {
        sinkIcon: "feishu",
        source: "stripe",
        sink: "feishu",
        "description": "Receive real-time notification on discord stating the cash sender, amount, bank name and the ending cash balance of the customer.",
        "subTitle": "Stripe cash balance event triggers a feishu message",
        "id": "20230518_2"
    },

    {
        sinkIcon: "slack",
        source: "stripe",
        sink: "slack",
        "description": "Receive real-time notification on discord stating the cash sender, amount, bank name and the ending cash balance of the customer.",
        "subTitle": "Stripe cash balance event triggers a slack message",
        "id": "20230518_3"
    },

    {
        sinkIcon: "slack",
        source: "stripe",
        sink: "slack",
        description: "Receive real-time notification on slack when a Stripe product is created.",
        subTitle: "Stripe product created event triggers a slack message",
        id: "20230523_3",
    },

    {
        sinkIcon: "discord",
        source: "stripe",
        sink: "discord",
        description: "Receive real-time notification on discord when a Stripe product is created.",
        subTitle: "Stripe product created event triggers a discord message",
        id: "20230523_2",
    },
    
    {
        sinkIcon: "feishu",
        source: "stripe",
        sink: "feishu",
        description: "Receive real-time notification on Feishu when a Stripe product is created.",
        subTitle: "Stripe product event triggers a Feishu message",
        id: "20230523_1",
    },
    
    {
        sinkIcon: "slack",
        source: "shopify",
        sink: "slack",
        description: "Receive real-time notification on slack when an order is cancelled.",
        subTitle: "Shopify order cancelled event triggers a slack message",
        id: "20230608_4",
    },

    {
    sinkIcon: "feishu",
        source: "shopify",
        sink: "feishu",
        description: "Receive real-time notification on slack when an order is cancelled.",
        subTitle: "Shopify order cancelled event triggers a slack message",
        id: "20230608_3",
    }
];
