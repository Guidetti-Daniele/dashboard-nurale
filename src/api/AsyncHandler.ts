export type OnLoading = (() => () => void) | undefined;
export type ApiCallback<T> = () => Promise<T>;
export type OnError = ((error: unknown) => void) | undefined;

class AsyncHandler<T> {
  onLoading: OnLoading;
  callback: ApiCallback<T>;
  onError: OnError;

  constructor(
    callback: ApiCallback<T>,
    onLoading?: OnLoading,
    onError?: OnError
  ) {
    this.onLoading = onLoading;
    this.callback = callback;
    this.onError = onError;
  }

  async callApi(): Promise<T | undefined> {
    const onLoadingRemover = this.onLoading ? this.onLoading : undefined;

    try {
      return await this.callback();
    } catch (error) {
      if (this.onError) this.onError(error);
      else console.error(error);
    } finally {
      if (onLoadingRemover) onLoadingRemover();
    }

    return undefined;
  }
}

export default AsyncHandler;
