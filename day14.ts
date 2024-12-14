type PerfReview<T> = T extends AsyncGenerator<infer U> ? U : never
