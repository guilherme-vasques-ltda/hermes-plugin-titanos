---
name: titanos-seller-operations
description: Use when analyzing Amazon Seller Central inventory, orders, listings, reports, fees, pricing, finances, or account health through Titanos.
license: UNLICENSED
compatibility: Hermes Agent Plugin v1 with Titanos MCP enabled.
---

# Titanos Seller Operations

Use live Titanos Selling Partner data for account-specific Amazon work. Keep every query scoped to one organization, connection, account, and marketplace.

## Workflow

1. Discover the relevant tools with `titanos_search_tools` using `domain="amazon-seller"`.
2. Identify the Selling Partner integration and account before querying business data.
3. Confirm marketplace; never silently merge BR, US, MX, or other accounts.
4. Use the smallest report window and dataset that answers the question.
5. Report exact coverage dates, freshness, and missing data.

## Read operations

- Inventory, inbound, reserved, and days of supply.
- Orders, sales trends, Buy Box, fees, finances, and reimbursements.
- Listings, pricing, catalog details, reports, and account health.
- Reorder analysis using user-provided lead time and safety stock.

## Write operations

Listing, price, inventory, fulfillment, or other account changes require the exact target and explicit user approval. Show the proposed payload and expected impact before calling a write tool.

## Pitfalls

- Account UUID is not the Amazon marketplace ID.
- FBA fulfillable stock alone may omit inbound and reserved units.
- Report data can lag; do not present incomplete periods as final.
- Reorder quantity is invalid without lead time and a safety-stock rule.
