export interface Lookup<Id = string> {
  id: Id;
  name: string;
}

export const createEmptyLookup = (): Lookup => ({
  id: '',
  name: '',
});
