type NaughtyOrNice<N> = N extends `${any}0` ? 'naughty' : 'nice'

type ParseInt<T> = T extends `${infer N extends number}` ? N : never

type FormatNames<T extends [string, string, string][]> = {
    [K in keyof T]: {
        name: T[K][0]
        count: ParseInt<T[K][2]>
        rating: NaughtyOrNice<K>
    }
}
