---
layout: page
title: Personal Protective Equipment Detection with YOLOv5s
description: Computer-vision research comparing activation functions for construction-site safety-equipment detection.
importance: 2
category: engineering
---

## Overview

This project applies object detection to construction-site safety monitoring. A dataset of 2,632 construction images was used to train YOLOv5s models for detecting personal protective equipment.

## Method

- Prepared and trained models on the custom construction-site dataset.
- Compared six activation functions under the same YOLOv5s architecture.
- Evaluated each model using precision, recall, mAP@0.5, and mAP@0.5–0.95.

## Results

The SiLU configuration achieved **84.8% precision**, **80.2% recall**, **83.9% mAP@0.5**, and **43.6% mAP@0.5–0.95**. The work was presented at the 2023 National Conference on Smart Technology Applications in Industry 4.0, Smart City, and Sustainability.
