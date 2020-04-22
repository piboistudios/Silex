/**
 * Silex, live web creation
 * http://projects.silexlabs.org/?/silex/
 *
 * Copyright (c) 2012 Silex Labs
 * http://www.silexlabs.org/
 *
 * Silex is available under the GPL license
 * http://www.silexlabs.org/silex/silex-licensing/
 */

import { ElementData } from '../element/types';

/**
 * @fileoverview Type definitions. Cross platform, it needs to run client and server side
 *
 */

export enum LOADING {
  NONE,
  WEBSITE,
  SILEX,
}

export interface UiData {
  mobileEditor: boolean,
  loading: LOADING,
  currentPageId: string,
  clipboard: null|[ElementData[], ElementData[]] // array of 2 elements: [allElements, rootElements]
}
