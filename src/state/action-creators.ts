import type { ShowRenderItemOptions } from '../types';
import { HIDE_ANIMATION_FINISHED, SHOW_COMPONENT, START_HIDE_ANIMATION } from './action-types';

// TODO: componentName type should be one of registered components
// TODO: data should equal to registered component props type
/**
 * Show component with passed data
 * @param componentName Registered component name
 * @param data Props to pass into component
 */
export const showComponent = (componentName: any, data: any, options?: ShowRenderItemOptions) => {
  return {
    type: SHOW_COMPONENT,
    payload: {
      componentName,
      data,
      options,
    },
  };
};

/**
 * Current visible component will start to hide.
 */
export const startHideAnimation = () => {
  return { type: START_HIDE_ANIMATION };
};

/**
 * Should be dispatched when visible component's hide animation has finished.
 */
export const hideAnimationFinished = () => {
  return { type: HIDE_ANIMATION_FINISHED };
};
