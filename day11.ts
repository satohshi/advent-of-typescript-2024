type Excuse<T extends Record<string, string | string[]>> = {
    new (excuse: T): `${keyof T & string}: ${T[keyof T] & string}`
}
