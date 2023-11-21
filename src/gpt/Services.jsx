import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: import.meta.env.VITE_ORGANIZATION_KEY,
    apiKey: import.meta.env.VITE_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

