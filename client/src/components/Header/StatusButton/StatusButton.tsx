import { InputStatus, Name, Radio, RadioInputs } from "./StatusButton-style"


export const StatusBar = () => {
  return (
    <RadioInputs>
        <Radio className="radio">
            <InputStatus className="input-status" type="radio" name="radio" checked/>
            <Name className="name">All</Name>
        </Radio>
        <Radio className="radio">
            <InputStatus className="input-status" type="radio" name="radio" checked/>
            <Name className="name">Pending</Name>
        </Radio>
        <Radio className="radio">
            <InputStatus className="input-status" type="radio" name="radio" checked/>
            <Name className="name">In process</Name>
        </Radio>
            
        <Radio className="radio">
            <InputStatus className="input-status" type="radio" name="radio" checked/>
            <Name className="name">Executed</Name>
        </Radio>
    </RadioInputs>
  )
}
