import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageTitle from '@/components/PageTitle';

describe('PageTitle Component', () => {
  it('renders the title correctly', () => {
    render(<PageTitle title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<PageTitle title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('applies dark mode classes when dark prop is true', () => {
    const { container } = render(<PageTitle title="Test Title" dark={true} />);
    const h1 = container.querySelector('h1');
    expect(h1).toHaveClass('text-white');
  });
});

