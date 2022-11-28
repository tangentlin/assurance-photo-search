export enum SearchPhase {
  /**
   * Initial phase when user first lands in the application
   */
  Initial = 'initial',

  /**
   * Loading phase
   */
  Loading = 'loading',

  /**
   * Error happens
   */
  Error = 'error',

  /**
   * Result has been retrieved
   */
  Result = 'result',

  /**
   * There is result but there is no match
   */
  ZeroResult = 'zeroResult',
}