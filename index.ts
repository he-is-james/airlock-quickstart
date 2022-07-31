import Airlock from "airlock-server";

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY || "",
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY || "",
};

new Airlock({
  airtableApiKey: [airtableConfig.apiKey],
  airtableBaseId: airtableConfig.baseKey,
  airtableUserTableName: "Users",
  airtableUsernameColumn: "email",
  airtablePasswordColumn: "password",
  allowedOrigins: [
		'http://localhost:4000'
	],
	port: 4000
});