interface ISetupProfileFunction {
  (value: any | null): void;
}

interface IUser {
  readonly isExists: ComputedRef<boolean>;
  profile: Ref<any> | any;
  readonly setupProfile: ISetupProfileFunction;
  readonly resetProfile: () => void;
}

export type { IUser as default };
