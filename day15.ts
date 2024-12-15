type GetRoute<
	T extends string,
	Result extends [string, number][] = [],
	CountArr extends unknown[] = [],
	_Count extends number = Result['length'] extends 0 ? 0 : CountArr['length'],
> = T extends ''
	? Result
	: T extends `-${infer A}`
		? GetRoute<A, Result, [...CountArr, unknown]>
		: T extends `${infer B}-${infer C}`
			? GetRoute<C, [...Result, [B, _Count]], [unknown]>
			: [...Result, [T, _Count]]