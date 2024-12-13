const survivalRatio = (input: number | string) => {
    const quarter = typeof input === 'string' ? input : `${input} Q1`
    const data = quarterlyData[quarter]
    if (!data) {
        throw new Error('Data not found')
    }
    return data.housingIndex / data.minimumWage
}

type QuarterlyData = {
    [key: string]: {
        /** inflation corrected housing price index */
        housingIndex: number

        /** inflation corrected North Pole minimum wage */
        minimumWage: number
    }
}

declare const quarterlyData: QuarterlyData
