import { Component, For, Index, Setter } from "solid-js";
import { DIFFICULTIES } from "~/configs/difficulties";
import { capitalizeWords } from "~/lib/utils";

const DifficultyPicker: Component<{ difficulty: number, setDifficulty: (diff: number) => void, isDisabled: boolean }> = (props) => {
    return <select disabled={props.isDisabled} value={`${props.difficulty}`} class="bg-muted text-muted-foreground border border-border rounded-md p-3 text-xl font-bold" onChange={(e) => props.setDifficulty(parseInt(e.currentTarget.value))}>
            <Index each={DIFFICULTIES}>
                {(_, i) => <option value={`${i}`} selected={i === props.difficulty}>{capitalizeWords(DIFFICULTIES[i])}</option>}
            </Index>
        </select>
}

export default DifficultyPicker;