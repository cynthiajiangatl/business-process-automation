import { SearchIndexClient, AzureKeyCredential, SearchIndexerDataSourceConnection, SearchIndexerClient, SearchIndex, SearchIndexer }from "@azure/search-documents"

export class CognitiveSearch {

    private _indexClient : SearchIndexClient
    private _indexerClient : SearchIndexerClient

    constructor(endpoint : string, apikey : string){
        this._indexClient = new SearchIndexClient(endpoint, new AzureKeyCredential(apikey));
        this._indexerClient = new SearchIndexerClient(endpoint, new AzureKeyCredential(apikey));
    }

    public create = async (pipelineName : string) : Promise<SearchIndexer> => {
      try{
        const dataSource = await this._createDataSource(pipelineName, process.env.AzureWebJobsStorage)
        const index = await this._createIndex(pipelineName)
        const indexer = await this._createIndexer(pipelineName, dataSource.name, index.name)
        return indexer
      } catch(err){
        console.log(err)
      }

    }

    private _createDataSource = async (dataSourceConnectionName : string, blobConnectionString : string) : Promise<SearchIndexerDataSourceConnection> => {
        const dataSourceConnection: SearchIndexerDataSourceConnection = {
            name: dataSourceConnectionName,
            description: "",
            type: "azureblob",
            container: {
              name: "results",
              query: `${dataSourceConnectionName}-stage3`
            },
            connectionString : blobConnectionString
          };
          return await this._indexerClient.createDataSourceConnection(dataSourceConnection); 
    }

    private _createIndex = async (indexName : string) => {
        const index : any = {
            "name": indexName,
            "defaultScoringProfile": "",
            "fields": [
              {
                "name": "label",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "pipeline",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "type",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "filename",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "bpaId",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "aggregatedResults",
                "type": "Edm.ComplexType",
                "fields": [
                  {
                    "name": "text",
                    "type": "Edm.String",
                    "searchable": false,
                    "filterable": false,
                    "retrievable": true,
                    "sortable": false,
                    "facetable": false,
                    "key": false,
                    "indexAnalyzer": null,
                    "searchAnalyzer": null,
                    "analyzer": null,
                    "normalizer": null,
                    "dimensions": null,
                    "vectorSearchConfiguration": null,
                    "synonymMaps": []
                  }
                ]
              },
              {
                "name": "resultsIndexes",
                "type": "Collection(Edm.ComplexType)",
                "fields": [
                  {
                    "name": "index",
                    "type": "Edm.Int64",
                    "searchable": false,
                    "filterable": false,
                    "retrievable": true,
                    "sortable": false,
                    "facetable": false,
                    "key": false,
                    "indexAnalyzer": null,
                    "searchAnalyzer": null,
                    "analyzer": null,
                    "normalizer": null,
                    "dimensions": null,
                    "vectorSearchConfiguration": null,
                    "synonymMaps": []
                  },
                  {
                    "name": "name",
                    "type": "Edm.String",
                    "searchable": false,
                    "filterable": false,
                    "retrievable": true,
                    "sortable": false,
                    "facetable": false,
                    "key": false,
                    "indexAnalyzer": null,
                    "searchAnalyzer": null,
                    "analyzer": null,
                    "normalizer": null,
                    "dimensions": null,
                    "vectorSearchConfiguration": null,
                    "synonymMaps": []
                  },
                  {
                    "name": "type",
                    "type": "Edm.String",
                    "searchable": false,
                    "filterable": false,
                    "retrievable": true,
                    "sortable": false,
                    "facetable": false,
                    "key": false,
                    "indexAnalyzer": null,
                    "searchAnalyzer": null,
                    "analyzer": null,
                    "normalizer": null,
                    "dimensions": null,
                    "vectorSearchConfiguration": null,
                    "synonymMaps": []
                  }
                ]
              },
              {
                "name": "id",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_content_type",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_size",
                "type": "Edm.Int64",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_last_modified",
                "type": "Edm.DateTimeOffset",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_content_md5",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_name",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_path",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": true,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              },
              {
                "name": "metadata_storage_file_extension",
                "type": "Edm.String",
                "searchable": false,
                "filterable": false,
                "retrievable": true,
                "sortable": false,
                "facetable": false,
                "key": false,
                "indexAnalyzer": null,
                "searchAnalyzer": null,
                "analyzer": null,
                "normalizer": null,
                "dimensions": null,
                "vectorSearchConfiguration": null,
                "synonymMaps": []
              }
            ],
            "scoringProfiles": [],
            "corsOptions": null,
            "suggesters": [],
            "analyzers": [],
            "normalizers": [],
            "tokenizers": [],
            "tokenFilters": [],
            "charFilters": [],
            "encryptionKey": null,
            "semantic": {
              "defaultConfiguration": null,
              "configurations": [
                {
                  "name": "default",
                  "prioritizedFields": {
                    "titleField": {
                      "fieldName": "filename"
                    },
                    "prioritizedContentFields": [
                      {
                        "fieldName": "aggregatedResults/text"
                      }
                    ],
                    "prioritizedKeywordsFields": []
                  }
                }
              ]
            },
            "vectorSearch": null
          }

        return this._indexClient.createIndex(index)
    }

    private _createIndexer = async (indexerName : string, dataSourceName : string, indexName : string) : Promise<SearchIndexer> => {
        const indexer : SearchIndexer = {
            name: indexerName,
            dataSourceName: dataSourceName,
            targetIndexName: indexName
        }
        return await this._indexerClient.createIndexer(indexer)
    }
}
