import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CognitiveSearch } from "../cogsearch"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const pipeline = context.req.query.pipeline
    const cogSearch : CognitiveSearch = new CognitiveSearch(process.env.COGSEARCH_URL, process.env.COGSEARCH_APIKEY)
    const indexer = await cogSearch.create(pipeline)
    context.res = {
        body : {"indexer" : indexer}
    }  
}

export default httpTrigger;
