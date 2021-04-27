export type CallbackType = {
  onError: (value: string) => void;
  onSuccess: (value: Record<string, any>) => void;
}
