export = ThreadUtilities;
export as namespace ThreadUtilities;

/**
 * Provides utilities for working with threads.
 */
declare namespace ThreadUtilities {
	/**
	 * Defers a function in a much more performant manner than
	 * {@linkcode task.defer}.
	 *
	 * @param callback The function to spawn.
	 * @param parameters The arguments to the function.
	 * @returns The thread that was created.
	 */
	export function FastDefer<Arguments extends ReadonlyArray<unknown>>(
		callback: (...parameters: Arguments) => void,
		...parameters: Arguments
	): thread;

	/**
	 * Delays a function call in a much more performant manner than
	 * {@linkcode task.delay}.
	 *
	 * @param delay The delay before the function is executed.
	 * @param callback The function to spawn.
	 * @param parameters The arguments to the function.
	 * @returns The thread that was created.
	 */
	export function FastDelay<Arguments extends ReadonlyArray<unknown>>(
		delay: number,
		callback: (...parameters: Arguments) => void,
		...parameters: Arguments
	): thread;

	/**
	 * Spawns a function in a much more performant manner than
	 * {@linkcode task.spawn} or the {@linkcode coroutine} library can provide.
	 *
	 * @param callback The function to spawn.
	 * @param parameters The arguments to the function.
	 * @returns The thread that was created.
	 */
	export function FastSpawn<Arguments extends ReadonlyArray<unknown>>(
		callback: (...parameters: Arguments) => void,
		...parameters: Arguments
	): thread;

	/**
	 * Executes a function and throws an error if yields at all.
	 *
	 * ```ts
	 * print(NoYield(() => $tuple("This", "doesn't", "yield"))); // This doesn't yield
	 * print(
	 *    NoYield(() => {
	 *        task.wait();
	 *        return "Errors!!!";
	 *    }),
	 * ); // Throws an error!
	 * ```
	 *
	 * @param callback The function to execute.
	 * @param parameters The arguments to the function.
	 * @returns The return value of the function.
	 */
	export function NoYield<Arguments extends ReadonlyArray<unknown>, Returns>(
		callback: (...parameters: Arguments) => Returns,
		...parameters: Arguments
	): Returns;

	/**
	 * Cancelling threads can sometimes cause weird issues that throw errors.
	 * This function is a workaround for that to make sure your threads are
	 * always cancelled in a safe manner. Basically, it is a safe version of
	 * {@linkcode task.cancel}.
	 *
	 * @param thread The thread to cancel.
	 */
	export function SafeThreadCancel(thread: thread): void;
}
