import { Client } from "@hubspot/api-client";

const scopes = [

].join(",");

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = "https://app.hubspot.com/oauth/authorize?" + queryParamString.toString();

const hubspotApi = new Client({
    clientId: process.env.HUBSPOT_CLIENT_ID,
    clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
    accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

export default hubspotApi;

export { LOGIN_URL };