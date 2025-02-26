import { BaseItem } from './AutocompleteApi';
import { InternalAutocompleteOptions } from './AutocompleteOptions';
import { AutocompleteState } from './AutocompleteState';

export interface AutocompleteStore<TItem extends BaseItem> {
  getState(): AutocompleteState<TItem>;
  dispatch(action: ActionType, payload: any): void;
  shouldSkipPendingUpdate: boolean;
}

export type Reducer = <TItem extends BaseItem>(
  state: AutocompleteState<TItem>,
  action: Action<TItem, any>
) => AutocompleteState<TItem>;

type Action<TItem extends BaseItem, TPayload> = {
  type: ActionType;
  props: InternalAutocompleteOptions<TItem>;
  payload: TPayload;
};

export type ActionType =
  | 'setActiveItemId'
  | 'setQuery'
  | 'setCollections'
  | 'setIsOpen'
  | 'setStatus'
  | 'setContext'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'Escape'
  | 'Enter'
  | 'submit'
  | 'reset'
  | 'focus'
  | 'blur'
  | 'mousemove'
  | 'mouseleave'
  | 'click';
