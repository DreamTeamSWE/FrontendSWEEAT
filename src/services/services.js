import Amplify from "aws-amplify";
import config from "../config/config.json";

//configure Amplify with config.json data
export function configure() {
  Amplify.configure({
    Auth: {
      mandatorySignId: true,
      region: config.cognito2.REGION,
      userPoolId: config.cognito2.USER_POOL_ID,
      userPoolWebClientId: config.cognito2.APP_CLIENT_ID,
    },
  });
}

//method to "suggest" an Instagram account (unused)
export async function suggest() {
  console.log("suggerisciCall");
  const suggerisciInput = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "minta_eats" }),
  };
  const response = await fetch(config.apiSuggest.suggestUrl, suggerisciInput);
  const json = await response.json();
  return json.message;
}
