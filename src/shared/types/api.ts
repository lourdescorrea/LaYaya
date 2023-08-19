import type { TRPCClientErrorLike } from "@trpc/client";
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
} from "@trpc/react-query/shared";
import type {
  AnyMutationProcedure,
  inferRouterInputs,
  inferRouterOutputs,
} from "@trpc/server";
import type { AppRouter } from "yaya/server";

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export type { AppRouter };

export interface ITrpcSubmit<TIn, TOut> {
  trpc: {
    useMutation: <TContext = unknown>(
      opts?: UseTRPCMutationOptions<
        TIn,
        TRPCClientErrorLike<AnyMutationProcedure>,
        TOut,
        TContext
      >
    ) => UseTRPCMutationResult<
      TOut,
      TRPCClientErrorLike<AnyMutationProcedure>,
      TIn,
      TContext
    >;
  };
  onSuccess?: (data: TOut, variables: TIn) => void;
}
