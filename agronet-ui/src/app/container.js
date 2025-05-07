'use client';

import React from 'react';
import { COMPONENTS } from './componentRegistry';
import ThemeToggle from '../themeToggle';

export default function Container({ componentKey, children, props }) {
  const Component = COMPONENTS[componentKey];
  return (
    <div className="container mx-4 bg-green-500 my-auto p-4">
      {/* <ThemeToggle /> */}
      {Component ? children : <p>Component not found!</p>}
    </div>
  );
}
