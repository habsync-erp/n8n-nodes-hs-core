import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class HabSync implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'HabSync',
		name: 'habSync',
		// icon: 'file:habsync.svg',
		icon: {
			light: 'file:hs.light.2.svg',
			dark: 'file:hs.dark.2.svg',
		},
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
			// Resource will go here
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Product',
						value: 'product',
					},
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
						resource: ['product'],
					},
				},
				options: [
					{
						name: 'Get Low Stock Products',
						value: 'getLowStockProducts',
						action: 'Get low stock products',
						description: 'Get low stock products from your HabSync instance API',
						routing: {
							request: {
								url: '/product/getLowStockProducts',
								method: 'GET',
							},
						},
					},
				],
				default: 'getLowStockProducts',
			},
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
						name: 'Get Todays Stock Move Report',
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
			// Optional/additional fields will go here//
		],
	};
}
