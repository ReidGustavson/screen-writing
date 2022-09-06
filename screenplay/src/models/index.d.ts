import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Authors {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Authors, AuthorsMetaData>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}