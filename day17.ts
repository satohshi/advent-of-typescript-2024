type FirstChar<T extends string> = T extends `${infer F}${string}` ? F : never

declare function upperCase<T extends string>(x: T): Uppercase<T>
declare function lowerCase<T extends string>(x: T): Lowercase<T>
declare function firstChar<T extends string>(x: T): FirstChar<T>
declare function firstItem<const T extends unknown[]>(x: T): T[0]
declare function makeTuple<const T>(value: T): [T]
declare function makeBox<const T>(value: T): { value: T }

declare function compose<A, B, C, D>(
	f: (x: A) => B,
	g: (x: B) => C,
	h: (x: C) => D
): (x: A) => D