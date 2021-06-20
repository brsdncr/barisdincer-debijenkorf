import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Button from '../components/Button';

describe('Button actions', () => {
  const defaultValues = {
    classname: 'clear-button',
    src: 'close.svg',
    alt: 'close',
    hover: true,
    role: 'button1',
  };

  it('Should contain hover class', () => {
    const { getByRole } = render(
      <Button
        active={true}
        classname={defaultValues.classname}
        src={defaultValues.src}
        alt={defaultValues.alt}
        hover={true}
        role={defaultValues.role}
      />
    );
    expect(getByRole('button1').classList.contains('hover')).toBe(true);
  });

  it('Should not contain hover class', () => {
    const { getByRole } = render(
      <Button
        active={true}
        classname={defaultValues.classname}
        src={defaultValues.src}
        alt={defaultValues.alt}
        hover={false}
        role={defaultValues.role}
      />
    );
    expect(getByRole('button1').classList.contains('hover')).toBe(false);
  });

  it('Should handle hover', async () => {
    const handleHover = jest.fn();
    const { getByRole } = render(
      <Button
        active={true}
        classname={defaultValues.classname}
        src={defaultValues.src}
        alt={defaultValues.alt}
        hover={false}
        role={defaultValues.role}
        onHover={handleHover}
      />
    );

    await fireEvent.mouseOver(getByRole('button1'));
    expect(handleHover).toHaveBeenCalledTimes(1);
  });

  it('Should handle click', async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button
        active={true}
        classname={defaultValues.classname}
        src={defaultValues.src}
        alt={defaultValues.alt}
        hover={false}
        role={defaultValues.role}
        onClick={handleClick}
      />
    );
    await fireEvent.click(getByRole('button1'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should be null when not active', () => {
    const { queryByRole } = render(
      <Button
        active={false}
        classname={defaultValues.classname}
        src={defaultValues.src}
        alt={defaultValues.alt}
        hover={false}
        role={defaultValues.role}
      />
    );
    expect(queryByRole('button1')).toBeNull();
  });
});
