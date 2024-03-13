import { ToggleSwitch, SwitchLabel, Checkbox, Slider } from "./SwitchColor-stile"


export const SwitchColor = () => {
  return (
    <ToggleSwitch>
        <SwitchLabel>
            <Checkbox type="checkbox" />
            <Slider className="slider"></Slider>
        </SwitchLabel>
    </ToggleSwitch>  
  )
}
