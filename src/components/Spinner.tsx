import { Component, For, Show, createMemo } from "solid-js";

const LoadedChamber = () => <div class="w-full h-full rounded-full bg-[orange] relative">
        <div class="absolute w-1/2 h-1/2 bg-background rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>;

const EmptyChamber = () => <div class="w-full h-full rounded-full bg-background" />

const Spinner: Component<{ ref: HTMLDivElement, chambers: number, filled: number }> = (props) => {
    const chamberList = createMemo(() => Array.from({ length: props.chambers }, (_, i) => ({ angle: (360 / props.chambers) * i + 240, index: i })));

    const calculateOffsetAngle = (angle: number) => angle + (360 / props.chambers) / 2;

    return(<div ref={props.ref} class="bg-cylinder w-full h-full relative rounded-full">
        <For each={chamberList()}>
            {({ angle, index }) => {
                return(
                    <>
                        <div class="absolute w-1/4 aspect-square rounded-full" style={{ transform: `translate(-50%, -50%)`, top: `calc(cos(${angle}deg) * 30% + 50%)`, left: `calc(sin(${angle}deg) * 30% + 50%)` }}>
                            <Show when={index < props.filled} fallback={<EmptyChamber />}>
                                <LoadedChamber />
                            </Show>
                        </div>
                        <div class="absolute w-1/5 aspect-square bg-background rounded-full" style={{ transform: `translate(-50%, -50%)`, top: `calc(cos(${calculateOffsetAngle(angle)}deg) * 55% + 50%)`, left: `calc(sin(${calculateOffsetAngle(angle)}deg) * 50% + 50%)` }}></div>
                    </>
                );
            }}
        </For>
    </div>);
}

export default Spinner;