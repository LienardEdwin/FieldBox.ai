type Anemometer = {
    id: number
    name: string
    loc: {
        lat: number
        long: number
    },
    statistics?: Statistics
    readings?: Readings[]
}
type Statistics = {
    average: {
        daily: {
            force: number
        },
        weekly: {
            force: number
        }
    }
}

type Readings = {
    timestamp: string
    force: number
    dir: number
}

