 const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [opValue, setOpValue] = useState('add');
    const [result, setResult] = useState(0);

    const updateVal1 = useCallback( (event:any) => {
        setVal1(event.target.value);
        calculateResult();

    }, [val1, setVal1]);

    const updateVal2 = useCallback( (event:any) => {
        setVal2(event.target.value);
        calculateResult();

    }, [val2, setVal2]);

    const updateRadioButtonChoice = useCallback( (event:any, op:string) => {
        setOpValue(event.target.value);
        calculateResult();

    }, [opValue, setOpValue]);

    const calculateResult = () => {
        var res: number = 0;
        switch(opValue){
            case "add": { res = val1 + val2; break; }
            case "sub": { res = val1 - val2; break; }
            case "mul": { res = val1 * val2; break; }
            case "div": { res = val1 / val2; break; }
        }
        setResult(res);
    };

    return(
        <div>
            <h3 style={{color:'red'}}>Calculator Project</h3>
            <div style={{width:'50%', border:'1px solid black', margin:'2%', padding: '2%', borderRadius:'10px' }}>
                <oj-label for={'input-a'}>Operand A</oj-label>
                <oj-input-number id='input-a'
                                value={val1}
                                step={1}
                                min={0}
                                max={100}
                                onvalueChanged={updateVal1}
                                labelHint="min=0, max=100"
                                labelEdge="inside"></oj-input-number>
                <div style={{height:'20px'}}></div>
                <oj-label for={'input-b'}>Operand B</oj-label>
                <oj-input-number id='input-b'
                                value={val2}
                                step={1}
                                min={0}
                                max={100}
                                onvalueChanged={updateVal2}
                                labelHint="min=0, max=100"
                                labelEdge="inside"></oj-input-number>
                <div style={{height:'20px'}}></div>
                <oj-radioset id='radioset' 
                             value={opValue} 
                             onClick={ (e) => updateRadioButtonChoice(e, opValue)}>
                    <oj-option value={'add'}>{'Add'}</oj-option>
                    <oj-option value={'sub'}>{'Subtraction'}</oj-option>
                    <oj-option value={'mul'}>{'Multiplication'}</oj-option>
                    <oj-option value={'div'}>{'Division'}</oj-option>
                </oj-radioset>
                <div style={{height:'20px'}}></div>
                <oj-button onojAction={calculateResult} label="Result">Result</oj-button>
                <h3>{result}</h3>
            </div>

        </div>
    )
