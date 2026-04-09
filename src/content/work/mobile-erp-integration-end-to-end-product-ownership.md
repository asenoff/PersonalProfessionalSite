---
title: "Mobile ERP Integration - End-to-End Product Ownership"
summary: "Built and owned a mobile ERP integration that enabled fiscal receipt printing through Bluetooth-connected fiscal devices in real operational environments."
description: "Case study about end-to-end ownership of a mobile ERP integration, device communication, observability, and long-term operational reliability."
tags:
  - ERP
  - Mobile
  - Integrations
  - Reliability
  - .NET
order: 3
---

## Context

I developed a mobile solution that enabled an ERP system to issue fiscal receipts through a Bluetooth-connected fiscal printer.

The goal was to allow ERP users, primarily logistics operators, to initiate and complete receipt printing directly from the ERP interface, without relying on separate workflows or manual steps.

The solution was designed around a mobile application hosting the ERP web interface, extended with a JavaScript bridge to communicate with the fiscal device through a .NET-based middleware layer.

## Responsibilities

- Sole developer responsible for the entire solution
- Designed and implemented the mobile application and integration layer
- Defined communication between ERP, mobile app, and fiscal device
- Implemented:
  - device communication logic
  - error handling and retry mechanisms
  - logging and monitoring infrastructure
- Worked closely with ERP developers to define required functionality
- Managed deployment and post-release support

## Challenges

- Unstable and unpredictable operating conditions:
  - Bluetooth connectivity issues
  - network variability
- Limited or unclear documentation for device communication
- Need for reliable operation in a real-world operational environment
- Licensing constraints that required a secure activation mechanism per device

## Approach

### End-to-end system design

- Implemented a WebView-based mobile interface extended with a JavaScript API
- Enabled ERP-side control over fiscal device operations through a structured bridge
- Designed the system to remain robust under imperfect conditions

### Reliability and error handling

- Built retry mechanisms and defensive handling for connectivity failures
- Focused on predictable behavior under edge cases instead of optimistic assumptions

### Observability and logging

- Implemented a detailed logging system used for:
  - debugging
  - operational monitoring
  - supporting ERP-side troubleshooting
- Designed a storage-efficient logging model using a flyweight-inspired approach:
  - repeated metadata such as device, OS, and operation types was stored as reusable entities
  - final records were reconstructed through indexed joins
- This significantly reduced storage footprint despite high-volume usage with thousands of receipts per day

### Security and activation

- Designed a device-based activation mechanism
- Chose a more complex activation flow in favor of control and security

## Outcome

- Delivered a complete, production-ready solution in about 3 months
- Successfully deployed across about 100 fiscal devices
- Used daily in operational workflows for approximately 6 years
- Required only minimal post-release fixes and no ongoing maintenance
- Handled thousands of receipt operations per day reliably

## Takeaway

This project demonstrated my ability to take full ownership of a system, from concept to production, and deliver a stable, long-running solution.

It also reflects how I approach engineering outside ideal conditions: build something that works in the real world, handles failure gracefully, and remains reliable without constant intervention.
