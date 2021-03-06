export type ObjectValues<T> = T extends {[key: string]: infer U} ? U : never;
