import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class HabSync implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'HabSync',
		name: 'habSync',
		icon: 'file:habsync.png',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from NASAs API',
		defaults: {
			name: 'HabSync',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'habSyncApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		//
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Report',
						value: 'report',
					},
				],
				default: 'report',
			},
			// Operations will go here
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['report'],
					},
				},
				options: [
					{
						name: 'Get todays stock move report',
						value: 'inve_get_todays_stock_move_report',
						action: 'Get todays stock move report',
						description: 'Get get todays stock move report from your HabSync instance API',
						routing: {
							request: {
								url: '/report/report1',
								method: 'GET',
							},
						},
					},
				],
				default: 'inve_get_todays_stock_move_report',
			},
			// Optional/additional fields will go here
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	// async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	// 	const items = this.getInputData();

	// 	let item: INodeExecutionData;
	// 	let myString: string;

	// 	// Iterates over all input items and add the key "myString" with the
	// 	// value the parameter "myString" resolves to.
	// 	// (This could be a different value for each item in case it contains an expression)
	// 	for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
	// 		try {
	// 			myString = this.getNodeParameter('myString', itemIndex, '') as string;
	// 			item = items[itemIndex];

	// 			item.json.myString = myString;
	// 		} catch (error) {
	// 			// This node should never fail but we want to showcase how
	// 			// to handle errors.
	// 			if (this.continueOnFail()) {
	// 				items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
	// 			} else {
	// 				// Adding `itemIndex` allows other workflows to handle this error
	// 				if (error.context) {
	// 					// If the error thrown already contains the context property,
	// 					// only append the itemIndex
	// 					error.context.itemIndex = itemIndex;
	// 					throw error;
	// 				}
	// 				throw new NodeOperationError(this.getNode(), error, {
	// 					itemIndex,
	// 				});
	// 			}
	// 		}
	// 	}

	// 	return [items];
	//}
}
