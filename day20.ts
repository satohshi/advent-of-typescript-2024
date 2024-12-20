type WhiteSpace = ' ' | '\t'

type Split<
	T extends string,
	U extends string,
> = T extends `${infer F}${U}${infer R}` ? [F, ...Split<R, U>] : [T]

type Trim<T extends string, U extends string = WhiteSpace> = T extends
	| `${infer F}${U}`
	| `${U}${infer F}`
	? Trim<F>
	: T

type Parse<
	T extends string[],
	_Declared extends string[] = [],
	_Used extends string[] = [],
> = T extends [infer F extends string, ...infer R extends string[]]
	? Trim<F> extends `${'let' | 'const' | 'var'} ${infer I} = ${string}`
		? Parse<R, [..._Declared, I], _Used>
		: Trim<F> extends `${string}(${infer Arg});`
			? Parse<R, _Declared, [..._Used, Arg]>
			: Parse<R, _Declared, _Used>
	: {
			declared: _Declared
			used: _Used
		}

type AnalyzeScope<T extends string> = Parse<Split<T, '\n'>>