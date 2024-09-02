const chartData = [
    { id: 0, series: "Baseball", group: "Group A", value: 42 },
    { id: 1, series: "Baseball", group: "Group B", value: 34 },
    { id: 2, series: "Bicycling", group: "Group A", value: 55 },
    { id: 3, series: "Bicycling", group: "Group B", value: 30 },
    { id: 4, series: "Skiing", group: "Group A", value: 36 },
    { id: 5, series: "Skiing", group: "Group B", value: 50 },
    { id: 6, series: "Soccer", group: "Group A", value: 22 },
    { id: 7, series: "Soccer", group: "Group B", value: 46 },
  ];

const chartDP = new MutableArrayDataProvider(chartData, {keyAttributes: "value"});

----------------------------------------------------------------------------------

const chartItem = (item: ojChart.ItemTemplateContext) => {
        return <oj-chart-item value={item.data.value} groupId={[item.data.group]} seriesId={item.data.series}></oj-chart-item>
    }

----------------------------------------------------------------------------------

        <div>
            <h3 style={{color:'red'}}>The Chart Project</h3>

            <oj-chart data={chartDP} type={'bar'}>
                <template slot={'itemTemplate'} render={chartItem}></template> 
            </oj-chart>
----------------------------------------------------------------------------------

const chartTypes = [
    {value: "bar", label: "Bar"},
    {value: "pie", label: "Pie"},
    {value: "sccater", label: "Scatter"},
    {value: "pyramid", label: "Pyramid"},
]
const chartTypeDP = new MutableArrayDataProvider(chartTypes, {keyAttributes: "value"});
        </div>

----------------------------------------------------------------------------------
<oj-select-single data={chartTypeDP} 
                              value={val}
                              onvalueChanged={valChangeHandler}></oj-select-single>

----------------------------------------------------------------------------------
const [val, setVal] = useState('pie' as ojChart.ChartType);
    const valChangeHandler = useCallback((event:any) => {
        setVal(event.detail.value);
    }, [val, setVal])

----------------------------------------------------------------------------------
