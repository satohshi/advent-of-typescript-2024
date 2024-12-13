declare namespace NodeJS {
    interface ProcessEnv {
        MOOD_LIGHTS: 'true'
        BATH_TEMPERATURE: '327.59'
        STRAWBERRIES: 'chocolate'
    }
}
export {}

// OR

declare var process: {
    env: {
        MOOD_LIGHTS: 'true'
        BATH_TEMPERATURE: '327.59'
        STRAWBERRIES: 'chocolate'
    }
}
