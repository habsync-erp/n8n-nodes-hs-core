![Banner image](![alt text](./nodes//HabSync/habsync-n8n-banner.svg))

# HabSync n8n Nodes

Custom n8n nodes built for the HabSync ERP ecosystem.  
These nodes allow tenants to connect workflows directly with their HabSync instance and automate inventory, reporting, approvals, notifications, and operational processes.

Designed for multi-tenant SaaS and self-hosted ERP deployments.

---

## Features

- Connect n8n with HabSync ERP
- Multi-tenant architecture support
- Tenant API key authentication
- Prebuilt ERP automation actions
- Inventory workflow automation
- Reporting & analytics automation
- Event-driven triggers
- Extendable node structure
- Works with SaaS and self-hosted tenants

---

## Available Nodes

### Core Nodes

| Node | Description |
|------|------------|
| HabSync | Main ERP integration node |
| HabSync Trigger | Triggers workflows from ERP events |
| Inventory Actions | Stock and inventory automation |
| Reporting Actions | Scheduled and on-demand reports |
| Notification Actions | Send alerts and notifications |
| Approval Actions | Workflow approval automation |

---

## Example Use Cases

### Inventory Automation
- Low stock alerts
- Inventory synchronization
- Daily warehouse summaries
- Auto reorder workflows

### Reporting
- Daily sales reports
- Inventory snapshots
- KPI exports
- Management dashboards

### Notifications
- Email alerts
- Telegram notifications
- Slack messages
- ERP internal announcements

### Approval Flows
- Purchase approvals
- Expense approvals
- Multi-step workflows

---

## Authentication

HabSync uses **Tenant API Keys** for secure access.

You can generate API keys from:

`HabSync Admin → Integrations → API Keys`

### Required Credentials

- Tenant URL
- API Key

---

## Installation

### Community Nodes (n8n)

Go to:

`Settings → Community Nodes → Install`

Install package:

```bash
n8n-nodes-habsync
```

---

## Self-Hosted Architecture

HabSync supports:

- Shared SaaS tenants
- Tenant self-hosted deployments

This allows organizations to:
- Own their data
- Run local automations
- Integrate internal systems
- Operate behind firewalls

---

## Example Workflows

### Daily Inventory Report

1. Trigger scheduled workflow
2. Fetch inventory summary from HabSync
3. Generate report
4. Send to management

---

### Low Stock Alert

1. Detect stock threshold breach
2. Trigger workflow
3. Notify procurement team
4. Create purchase request

---

### ERP Sync

Sync data between HabSync and external systems:

- Products
- Customers
- Orders
- Inventory movements

---

## Security

- Tenant-isolated authentication
- Secure API communication
- Role-based access support
- API key rotation & revocation

---

## Compatibility

| Platform | Supported |
|----------|----------|
| n8n Cloud | Yes |
| Self-hosted n8n | Yes |
| Docker | Yes |
| VPS | Yes |

---

## Documentation

Coming soon:
- Full API reference
- Workflow templates
- Integration guides
- Advanced automation patterns

---

## Roadmap

- Additional ERP modules
- Webhook-based triggers
- AI-assisted workflows
- Power BI integration
- Advanced reporting engine
- Multi-system orchestration

---

## Support

- GitHub Issues
- HabSync Support Channel

---

## License

[MIT]
