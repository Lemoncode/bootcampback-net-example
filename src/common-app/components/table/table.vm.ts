import { Lookup } from 'common/models';

export interface RowRendererProps<T = {}> {
  row: T;
}

export interface EditableRowProps<T> extends RowRendererProps<T> {
  onEdit?: (id: string) => void;
  onDelete?: (lookup: Lookup) => void;
}
