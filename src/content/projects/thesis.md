---
title: 'Master Thesis'
description: 'Generating 3D terrain based on river networks fully on the GPU'
year: '2025-2026'
heroImage: '../../assets/benchmark_scene.png'
category: 'Academic'
selected: true
---

## Description

My Thesis is about procedural terrain generation in Unity using Compute shaders on the GPU. The terrain is based on 2D heightmapts created from procedurally generated river networks. These heightmaps are then combined into a density function with 3D noise. The terrain mesh data is extracted from the density field, using a GPU compute shader implementation of marching cubes. 
This combination provides large scale structures defined by the river skeleton like mountains and valleys while enabling voluemtric details like overhang and caves through the use of 3D fractal noise.
