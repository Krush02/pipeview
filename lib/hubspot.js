import HubspotApi from '@hubspot/api-client';

const scopes = [

].join(",");

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = "" + queryParamString.toString();

const hubspotApi = new HubspotApi({
    clientId: process.env.HUBSPOT_CLIENT_ID,
    clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
});

export default hubspotApi;

export { LOGIN_URL };