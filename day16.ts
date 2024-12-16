declare function DynamicParamsCurrying<TOriginalArg extends unknown[], TReturn>(
	fn: (...args: TOriginalArg) => TReturn
): <TCurriedArg extends unknown[]>(
	...args: TCurriedArg
) => TOriginalArg extends [...TCurriedArg, ...infer RestArg]
	? ReturnType<typeof DynamicParamsCurrying<RestArg, TReturn>>
	: TReturn