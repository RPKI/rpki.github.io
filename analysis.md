---
layout: page
title: Analysis
permalink: /analysis
---
# Unexpected cases

#### Case 1.1:
**Announcement via**: Falcon routeserver

**Target network**: is falcon peer, is monitor

**Target network prefix visibility**: None or partial 

![alt text]({{site.baseurl}}images/case_1_1.png "Case 1.1")

#### Case 1.2:
**Announcement via**: direct peering with target network

**Target network**: is direct peer, is monitor

**Target network prefix visibility**: None or partial 

![alt text]({{site.baseurl}}images/case_1_2.png "Case 1.2")

***

#### Case 2.1:
**Announcement via**: Falcon routeserver

**Target network**: is monitor, is customer of a falcon peer 

**Target network prefix visibility**: None or partial

![alt text]({{site.baseurl}}images/case_2_1.png "Case 2.1")

#### Case 2.2:
**Announcement via**: direct peering

**Target network**: is monitor, is customer of the direct peer

**Target network prefix visibility**: None or partial

![alt text]({{site.baseurl}}images/case_2_2.png "Case 2.2")

***

#### Case 3.1:
**Announcement via**: Falcon routeserver

**Target networks**: A is falcon peer, B is customer of A, both are monitors, (**??B is not falcon peer??**)

**Target network prefix visibility**: Mismatch in prefix visibility between A and B

![alt text]({{site.baseurl}}images/case_3_1.png "Case 3.1")

#### Case 3.2:
**Announcement via**: direct peering

**Target networks**: A is direct peer, B is customer of A, both are monitors, (**??B is not direct peer??**)

**Target network prefix visibility**: Mismatch in prefix visibility between A and B

![alt text]({{site.baseurl}}images/case_3_2.png "Case 3.2")
