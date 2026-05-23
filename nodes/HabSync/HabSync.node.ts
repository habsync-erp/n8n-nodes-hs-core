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
		description: 'Automate with your habsync instance',
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
						name: 'Warehouse',
						value: 'warehouse',
					},
					{
						name: 'Warehouse Location',
						value: 'warehouse_location',
					},
					{
						name: 'Report',
						value: 'report',
					},
				],
				default: 'report',
			},
			// Operations will go here
			// 1. Product-Resource-Operation
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
					{
						name: 'Get Recently Added Products',
						value: 'getRecentlyAddedProducts',
						action: 'Get recently added products',
						description: 'Retrieve the latest 5 products added to inventory',
						routing: {
							request: {
								url: `/product/getRecentlyAddedProducts`,
								method: 'GET',
							},
						},
					},
				],
				default: 'getLowStockProducts',
			},
			// 2. Warehouse-Resource-Operation
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['warehouse'],
					},
				},
				options: [
					{
						name: 'Get Warehouse Count',
						value: 'getWarehouseCount',
						action: 'Get warehouse count',
						description: 'Retrieve the total number of warehouses from your HabSync instance',
						routing: {
							request: {
								url: '/warehouse/getWarehouseCount',
								method: 'GET',
							},
						},
					},
				],
				default: 'getWarehouseCount',
			},
			// 3. WH-Location Resource-Operations
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['warehouse_location'],
					},
				},
				options: [
					{
						name: 'Get Warehouse Location Count',
						value: 'getWarehouseLocationCount',
						action: 'Get warehouse location count',
						description:
							'Retrieve the total number of warehouse locations from your HabSync instance',
						routing: {
							request: {
								url: '/warehouse_location/getWarehouseLocationCount',
								method: 'GET',
							},
						},
					},
					{
						name: 'Get Location Stock Distribution',
						value: 'getLocationStockDistribution',
						action: 'Get location stock distribution',
						description:
							'Retrieve stock distribution across warehouse locations from your HabSync instance',
						routing: {
							request: {
								url: '/warehouse_location/getLocationStockDistribution',
								method: 'GET',
							},
						},
					},
				],
				default: 'getWarehouseLocationCount',
			},
			// 4. Report-Resource-Operation
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
						value: 'getTodaysStockMoveReport',
						action: 'Get todays stock move report',
						description: 'Get get todays stock move report from your HabSync instance API',
						routing: {
							request: {
								url: '/report/getTodaysStockMoveReport',
								method: 'GET',
							},
						},
					},
				],
				default: 'getTodaysStockMoveReport',
			},
			// Optional/additional fields will go here//
		],
	};
}
