type VariableDeclaration = 'let' | 'const' | 'var'
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

type ParseInternal<
	T extends string[],
	_Res extends Record<string, string>[] = [],
> = T extends [infer F extends string, ...infer R extends string[]]
	? Trim<F> extends `${VariableDeclaration} ${infer I} = ${string}`
		? ParseInternal<R, [..._Res, { id: I; type: 'VariableDeclaration' }]>
		: Trim<F> extends `${infer Func}(${infer Arg});`
			? ParseInternal<R, [..._Res, { argument: Arg; type: 'CallExpression' }]>
			: ParseInternal<R, _Res>
	: _Res

type Parse<T extends string> = ParseInternal<Split<T, '\n'>>