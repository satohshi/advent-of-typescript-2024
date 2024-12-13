const survivalRatio = (input: number) => {
    const data = annualData[input]
    if (!data) {
        throw new Error('Data not found')
    }
    return data.housingIndex / data.minimumWage
}

type AnnualData = {
    [key: string]: {
        /** inflation corrected housing price index */
        housingIndex: number

        /** inflation corrected North Pole minimum wage */
        minimumWage: number
    }
}

declare const annualData: AnnualData
