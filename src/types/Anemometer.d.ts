type Anemometer = {
    id: number;
    name: string;
    loc: {
        lat: number;
        long: number;
    }
}

type AnemometerDetail = Anemometer &{
    statistics: {
        average: {
            daily: {
                force: number
            },
            weekly: {
                force: number
            }
        }
    },
    readings: [
        {
            timestamp: string,
            force: number,
            dir: number
        },

    ]
}