import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('should render a button', async () => {
        const { findAllByTestId } = render(<Button>Click me</Button>); 
        const button = await findAllByTestId('button');
        expect(button).toBeDefined();
    });
});