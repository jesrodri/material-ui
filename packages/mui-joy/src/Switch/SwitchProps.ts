import * as React from 'react';
import { UseSwitchParameters } from '@mui/base/SwitchUnstyled';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { ColorPaletteProp, SxProps, VariantProp } from '../styles/types';
import { CreateSlotsAndSlotProps, SlotProps } from '../utils/types';

export type SwitchSlot =
  | 'root'
  | 'action'
  | 'input'
  | 'track'
  | 'thumb'
  | 'startDecorator'
  | 'endDecorator';

export interface SwitchPropsVariantOverrides {}
export interface SwitchPropsColorOverrides {}
export interface SwitchPropsSizeOverrides {}

export type SwitchSlotsAndSlotProps = CreateSlotsAndSlotProps<
  SwitchSlot,
  {
    root: SlotProps<'div', {}, SwitchOwnerState>;
    thumb: SlotProps<'span', {}, SwitchOwnerState>;
    action: SlotProps<'div', {}, SwitchOwnerState>;
    input: SlotProps<'button', {}, SwitchOwnerState>;
    track: SlotProps<'span', {}, SwitchOwnerState>;
    startDecorator: SlotProps<'span', {}, SwitchOwnerState>;
    endDecorator: SlotProps<'span', {}, SwitchOwnerState>;
  }
>;

export interface SwitchTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P &
    SwitchSlotsAndSlotProps &
    UseSwitchParameters & {
      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       * @default 'neutral'
       */
      color?: OverridableStringUnion<ColorPaletteProp, SwitchPropsColorOverrides>;
      /**
       * The element that appears at the end of the switch.
       */
      endDecorator?: React.ReactNode | ((ownerState: SwitchOwnerState) => React.ReactNode);
      /**
       * The size of the component.
       * @default 'md'
       */
      size?: OverridableStringUnion<'sm' | 'md' | 'lg', SwitchPropsSizeOverrides>;
      /**
       * The element that appears at the end of the switch.
       */
      startDecorator?: React.ReactNode | ((ownerState: SwitchOwnerState) => React.ReactNode);
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx?: SxProps;
      /**
       * The variant to use.
       * @default 'solid'
       */
      variant?: OverridableStringUnion<VariantProp, SwitchPropsVariantOverrides>;
    };
  defaultComponent: D;
}

export type SwitchProps<
  D extends React.ElementType = SwitchTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<SwitchTypeMap<P, D>, D>;

export interface SwitchOwnerState extends SwitchProps {
  /**
   * If `true`, the switch's focus is visible.
   */
  focusVisible?: boolean;
}
