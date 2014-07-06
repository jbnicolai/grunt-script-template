
function getData() {
    return {
        title: 'Generated code',
        functions: [
            {
                name: "test1",
                params: [
                    {
                        name: 'p1',
                        type: 'string'
                    }]
            },
            {
                name: "test2",
                params: [
                    {
                        name: 'p1',
                        type: 'string'
                    },
                    {
                        name: 'p2',
                        type: 'number'
                    }]
            },
            {
                name: "test3",
                params: [
                    {
                        name: 'p1',
                        type: 'string'
                    },
                    {
                        name: 'p2',
                        type: 'string'
                    },
                    {
                        name: 'p3',
                        type: 'number'
                    }]
            },
        ]
    }
}

export = getData;