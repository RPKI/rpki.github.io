---
layout: page
title: Analysis
permalink: /analysis
---
# Unexpected cases

#### Case 1.1:
We announce prefixes via the falcon routeserver. The target network is peering with the falcon RS and is also a monitor.
The target network does not send our prefixes to the route collector.
![alt text]({{site.baseurl}}images/case_1_1.png "Logo Title Text 1")

#### Case 1.1:
We announce prefixes directly to the target network. The target network is a monitor.
The target network does not send our prefixes to the route collector.
![alt text]({{site.baseurl}}images/case_1_2.png "Logo Title Text 1")

***


#### Case 2.1:
We announce prefixes via the falcon routeserver. The target network is in the customer cone of a falcon peer. The target network
is also a monitor. The target network does not send our prefixes to the route collector.
![alt text]({{site.baseurl}}images/case_2_1.png "Logo Title Text 1")

#### Case 2.1:
We announce prefixes directly to a peer. The target network is in the customer cone of that peer. It is also a monitor.
The target network does not send our prefixes to the route collector.
![alt text]({{site.baseurl}}images/case_2_2.png "Logo Title Text 1")


***

#### Case 3.1:
We announce prefixes via the falcon routeserver. The target network is in the customer cone of a falcon peer. The target network and its
provider are both monitors. ??????????????????????
![alt text]({{site.baseurl}}images/case_3_1.png "Logo Title Text 1")
