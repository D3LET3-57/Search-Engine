import {liteClient as algoliasearch } from 'algoliasearch/lite';
import dotenv from 'dotenv';
dotenv.config();
const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'OI4IKD4AG4' ;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '0c83f6cb8e9586629ff79a3226c3bf86';

if (!appId || !apiKey) {
  throw new Error('Algolia app ID and API key must be set in environment variables');
}

export const searchClient = algoliasearch(appId, apiKey);