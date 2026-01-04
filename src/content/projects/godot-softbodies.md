---
title: 'Godot Softbodies'
description: '2D Softbody implementation with own phyics calculations'
year: '2025'
heroImage: '../../assets/godot-softbodies-header.png'
category: 'Student Projects'
github: 'https://github.com/Argonbart/GoPrototyping/'
selected: true
---

## Description

This is a implementation of a 2D softbody in the Godot engine. It queries the physics server of Godot and is thus able to collide with the engines built in PhysicsBodies. It is defined only by the outline points that are each being connected with constraints. This alone would make a pretty unstable softbody but it is complemented by an Area constraint, that pushes each point of the softbody out- or inwards based on the difference between the current area the softbody takes up and the desired area.